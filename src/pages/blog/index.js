import * as React from 'react';
import Sidebar from '@components/Sidebar';
import BlogRoll from '@components/BlogRoll';

const BlogIndexPage = () => {
  return (
    <div className='columns is-mobile'>
      <div className='column is-10-desktop is-offset-1-desktop is-10-mobile is-offset-1-mobile'>
        <div className='columns is-mobile is-multiline '>
          <div className='column is-9-desktop is-12-mobile has-margin-top-24 has-margin-bottom-24'>
            <BlogRoll />
          </div>
          <div className='column is-3-desktop is-12-mobile has-margin-top-24 has-margin-bottom-24'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;
