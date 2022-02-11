import * as React from 'react';

import Sidebar from '@components/Sidebar';
import BlogRoll from '@components/BlogRoll';

const BlogIndexPage = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-mobile is-multiline'>
          <div className='column is-8-desktop is-12-mobile has-margin-top-24'>
            <BlogRoll />
          </div>
          <div className='column is-3-desktop is-6-tablet is-offset-3-tablet is-offset-1-desktop is-12-mobile has-margin-top-24'>
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndexPage;
