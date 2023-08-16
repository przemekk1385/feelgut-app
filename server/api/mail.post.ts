import * as postmark from "postmark";

export default defineEventHandler(async (event) => {
  const {
    reCaptchaSecretKey: secret,
    mailFrom: From,
    mailTo: To,
    postmarkServerToken,
  } = useRuntimeConfig();

  const {
    name,
    email,
    text: TextBody,
    consent,
    response,
  } = await readBody(event);

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
        statusMessage: "data processing consent is missing",
      }),
    );
  } else {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "reCAPTCHA failed",
      }),
    );
  }
});
