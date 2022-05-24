import sendContactMai from './request';

const sendContactMailService = async ({ from, message, email, body }) => {
  try {
    return await sendContactMai.post('/contact', {
      data: {
        from,
        message,
        email,
        body,
        recipients: process.env.GATSBY_TO_EMAIL,
        subject: 'A Message from GlobalKonvict site',
      },
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(`Something went wrong in the sendmail method. Error: ${error.message}`);
  }
};

export default sendContactMailService;
