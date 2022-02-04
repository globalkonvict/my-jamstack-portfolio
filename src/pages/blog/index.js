import * as React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const BlogIndexPage = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='content'>
          <BlogRoll />
        </div>
      </div>
    </section>
  );
};

export default BlogIndexPage;
