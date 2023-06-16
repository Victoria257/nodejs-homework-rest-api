const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "bez.vik@ukr.net",
    pass: MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  const email = { ...data, from: "Viktoria<bez.vik@ukr.net>" };
  transporter
    .sendMail(email)
    .then(() => console.log("email send success"))
    .catch((error) => console.log(`error.message ${error.message}`));

  return true;
};

module.exports = sendEmail;
