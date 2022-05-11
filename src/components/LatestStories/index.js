import { Link } from 'gatsby';
import BlogRoll from '../BlogRoll';
import './index.sass';

function LatestStories() {
  return (
    <section className='section latest-stories section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-12'>
            <div className='content'>
              <div className='column is-12'>
                <h3 className='has-text-weight-semibold is-size-3'>Latest Articles</h3>
                <BlogRoll />
                <div className='column is-12 has-text-centered'>
                  <Link className='button is-rounded is-primary  is-medium' to='/blog'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestStories;
