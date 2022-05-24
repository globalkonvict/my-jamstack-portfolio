'use strict';
const nodemailer = require('nodemailer');
const querystring = require('querystring');

exports.handler = async (event, context) => {
  // Only allow POST
  const params = querystring.parse(event.body);
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { from, message, email, subject } = params;
  const mailObj = {
    from: `${from} <${email}>`,
    recipients: ['sarthakwarlock@gmail.com'],
    subject: subject,
    message: message,
  };

  sendEmail(mailObj).then(res => {
    console.log(res);
  });

  return {
    statusCode: 200,
    body: `Hello, ${params} from Netlify Functions!`,
  };
};

/**
 * sendEmail
 * @param {Object} mailObj - Email meta data and body
 * @param {String} from - Email address of the sender
 * @param {Array} recipients - Array of recipients email address
 * @param {String} subject - Subject of the email
 * @param {String} message - message
 */
const sendEmail = async mailObj => {
  const { from, recipients, subject, message } = mailObj;

  try {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      auth: {
        user: 'sarthakwarlock@gmail.com',
        pass: 'q0Yb5V6PFpcC8yI3',
      },
    });

    // send mail with defined transport object
    let mailStatus = await transporter.sendMail({
      from: from, // sender address
      to: recipients, // list of recipients
      subject: subject, // Subject line
      text: message, // plain text
    });

    console.log(`Message sent: ${mailStatus.messageId}`);
    return `Message sent: ${mailStatus.messageId}`;
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in the sendmail method. Error: ${error.message}`);
  }
};
