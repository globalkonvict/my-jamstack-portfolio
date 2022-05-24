import Lottie from 'react-lottie-player';
import ThankYouAnimated from '@src/img/lottie/thank-you.json';

const ThankYou = () => (
  <section className='section'>
    <div className='container'>
      <div className='content'>
        <div className='has-text-centered'>
          <h1 className='is-size-2'>Thank you!</h1>
          <p className='is-size-4'>Message sent successfully</p>
        </div>
        <Lottie loop animationData={ThankYouAnimated} play style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  </section>
);

export default ThankYou;
