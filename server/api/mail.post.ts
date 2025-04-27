import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { awsCredentialsProvider } from "@vercel/functions/oidc";
import { z } from "zod";

const mailSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	text: z.string(),
	consent: z.boolean(),
});

export default defineEventHandler(async (event) => {
	const { awsDefaultRegion, awsRoleArn, mailTo } = useRuntimeConfig();

	try {
		const { data, error } = await readValidatedBody(event, (body) =>
			mailSchema.safeParse(body),
		);

		if (error) {
			throw createError({
				statusCode: 400,
				statusMessage: "Bad Request",
			});
		}

		const { name, email, text, consent } = data;

		if (!consent) {
			throw createError({
				statusCode: 400,
				statusMessage: "Consent required",
			});
		}

		const sesClient = new SESClient({
			region: awsDefaultRegion as string,
			credentials: awsCredentialsProvider({
				roleArn: awsRoleArn as string,
			}),
		});

		const sesCommand = new SendEmailCommand({
			Destination: {
				ToAddresses: [mailTo],
			},
			Message: {
				Body: {
					Text: { Data: text },
				},
				Subject: { Data: "Wiadomość z serwisu 'feelgut.pl'" },
			},
			Source: "feelgut-noreply@kalis.ovh",
			ReplyToAddresses: [`"${name}" <${email}>`],
		});

		const result = await sesClient.send(sesCommand);
		const { MessageId: messageId } = result;

		if (!messageId) {
			console.error("SES Error: ", result);

			throw createError({
				statusCode: 502,
				statusMessage: "Failed to send email",
			});
		}

		console.info("Mail sent successfully", {
			name,
			email,
			messageId,
		});

		event.node.res.statusCode = 202;
		return null;
	} catch (err) {
		const { statusCode } = err as { statusCode?: number };
		if (statusCode) {
			throw err;
		}

		console.error("Error: ", err);
		throw createError({
			statusCode: 500,
			statusMessage: "Internal server error",
		});
	}
});
