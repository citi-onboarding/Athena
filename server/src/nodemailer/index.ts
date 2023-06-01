const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('./config/smtp');

process.env

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


async function run() {
  const mailSent = await transporter.sendMail({
    text: "Texto do E-mail",
    subject: "Assunto do e-mail",
    from: "Athena <emailteste199x@gmail.com",
    to: ["giulyanofelipesantos@gmail.com", "emailteste199x@gmail.com"],
    html: `
    <html>
    <body>
      <strong> Conteúdo HTML</strong></br> Do E-mail
      <p> Email enviado pelo nodemailer! Squad One piece <p>
    </body>
  </html> 
    `,
  });

  console.log(mailSent);
}

run();

