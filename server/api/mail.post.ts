import * as postmark from "postmark";
import { z } from "zod";

const mailSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	text: z.string(),
	consent: z.boolean(),
	response: z.string(),
});

export default defineEventHandler(async (event) => {
	const {
		reCaptchaSecretKey: secret,
		mailFrom: From,
		mailTo: To,
		postmarkServerToken,
	} = useRuntimeConfig();

	const result = await readValidatedBody(event, (body) =>
		mailSchema.safeParse(body),
	);

	if (!result.success)
		sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Bad request",
				data: result.error.issues,
			}),
		);

	const {
		data: { name, email, text: TextBody, consent, response },
	} = result;

	// biome-ignore lint/suspicious/noExplicitAny:
	const { score }: any = await $fetch(
		"https://www.google.com/recaptcha/api/siteverify",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				secret,
				response,
			}),
		},
	);

	if (score > 0.5 && consent) {
		const client = new postmark.ServerClient(postmarkServerToken);

		client.sendEmail({
			From,
			To,
			ReplyTo: `"${name}" <${email}>`,
			Subject: "Wiadomość z serwisu 'feelgut.pl'",
			TextBody,
			MessageStream: "outbound",
		});

		event.node.res.statusCode = 202;
		await send(event);
	} else if (!consent) {
		sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Bad request",
				data: { detail: "data processing consent is missing" },
			}),
		);
	} else {
		sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Bad request",
				data: { detail: "reCAPTCHA failed" },
			}),
		);
	}
});
