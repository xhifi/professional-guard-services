import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "info@pgsfm.uk",
    pass: process.env.GMAIL_KEY,
  },
});

export default transport;
