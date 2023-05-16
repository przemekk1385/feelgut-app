import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const {
    reCaptchaSecretKey: secret,
    mailPassword: pass,
    mailPort: port,
    mailServer: host,
    mailTo: to,
    mailUsername: user,
  } = useRuntimeConfig();

  const { name, email, text, consent, response } = await readBody(event);

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
    }
  );

  if (score > 0.5 && consent) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from: user,
      replyTo: `"${name}" <${email}>`,
      to,
      subject: "Wiadomość z serwisu 'feelgut.pl'",
      text,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    event.node.res.statusCode = 202;
    await send(event);
  } else if (!consent) {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "data processing consent is missing",
      })
    );
  } else {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "reCAPTCHA failed",
      })
    );
  }
});
