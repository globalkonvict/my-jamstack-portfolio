import { Link } from 'gatsby';
import Lottie from 'react-lottie-player';
import notFoundAnimation from '@src/img/lottie/page-not-found-404.json';

const NotFoundPage = () => (
  <section className='section'>
    <div className='container'>
      <div className='columns is-multiline'>
        <div className='column is-10 is-offset-1'>
          <h1 className='is-size-1 has-text-centered'>You hit the non existent page.</h1>
          <h2 className='is-size-3 has-text-centered'>GO back to home & look at the available posts.</h2>
        </div>
        <div className='column is-10 is-offset-1'>
          <Lottie loop animationData={notFoundAnimation} play style={{ width: '100%', height: '100%' }} />
        </div>
        <Link className='button is-primary go-nack-to-home-btn'>GO back to home</Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
