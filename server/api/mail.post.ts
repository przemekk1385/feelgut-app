import * as postmark from "postmark";
import { z } from "zod";

const mailSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	text: z.string(),
	consent: z.boolean(),
});

export default defineEventHandler(async (event) => {
	const {
		mailFrom: From,
		mailTo: To,
		postmarkServerToken,
	} = useRuntimeConfig();

	try {
		const { data, error } = await readValidatedBody(event, (body) =>
			mailSchema.safeParse(body),
		);

		if (error) {
			throw createError({
				statusCode: 400,
				statusMessage: "Bad request",
				data: { detail: error.errors },
			});
		}

		const { name, email, text: TextBody, consent } = data;

		if (!consent) {
			throw createError({
				statusCode: 400,
				statusMessage: "Bad request",
				data: { detail: "Data processing consent is missing" },
			});
		}

		const client = new postmark.ServerClient(postmarkServerToken);

		const result = await client.sendEmail({
			From,
			To,
			ReplyTo: `"${name}" <${email}>`,
			Subject: "Wiadomość z serwisu 'feelgut.pl'",
			TextBody,
			MessageStream: "outbound",
		});

		if (result.ErrorCode !== 0) {
			throw createError({
				statusCode: 500,
				statusMessage: "Failed to send email",
				data: { detail: result.Message },
			});
		}

		event.node.res.statusCode = 202;
		await send(event);
	} catch (err) {
		console.error("Error occurred: ", err);

		throw createError({
			statusCode: 500,
			statusMessage: "Internal server error",
			data: { detail: "Unknown error occurred" },
		});
	}
});
