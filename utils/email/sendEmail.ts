import fetch from "node-fetch";
import { emailTemplate } from "./emailTemplate";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const CLIENT_NAME = "Mathias Falci";

type sendEmailFnProps = { email: string; message: string };

const sendEmail = async ({ email, message }: sendEmailFnProps) => {
  const EMAIL_SUBJECT = "New message from mathiasfc.dev";

  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: EMAIL_RECEIVER,
            },
          ],
          subject: EMAIL_SUBJECT,
        },
      ],
      from: {
        email: EMAIL_SENDER,
        name: EMAIL_SUBJECT,
      },
      content: [
        {
          type: "text/html",
          value: emailTemplate(email, message, CLIENT_NAME),
        },
      ],
    }),
  });
};

export { sendEmail };
