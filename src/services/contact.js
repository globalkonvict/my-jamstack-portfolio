import sendContactMai from './request';

const sendContactMailService = async ({ from, message }) => {
  try {
    return await request.post('/contact', {
      from,
      message,
      recipients: process.env.GATSBY_TO_EMAIL,
      subject: 'A Message from GlobalKonvict site',
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(`Something went wrong in the sendmail method. Error: ${error.message}`);
  }
};

export default sendContactMailService;
