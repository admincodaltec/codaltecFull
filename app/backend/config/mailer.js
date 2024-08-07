const nodemailer = require('nodemailer');
require('dotenv').config();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_NODEMAILER, // generated ethereal user
    pass: process.env.PASS_NODEMAILER, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log('Ready send emails');
});

module.exports = transporter;
