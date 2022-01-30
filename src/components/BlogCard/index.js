import React from 'react';
import { Link } from 'gatsby';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineTags } from 'react-icons/ai';

import PreviewCompatibleImage from '../PreviewCompatibleImage';
import './index.sass';

const BlogCard = ({ title, date, excerpt, featuredimage, slug, tags }) => {
  return (
    <div className='blog-card card'>
      <div className='card-content'>
        <Link to={slug}>
          <h3 className='title is-size-4'>{title}</h3>
        </Link>
        <div className='blog-meta '>
          <GoCalendar className='icon is-primary' />
          <span className='is-size-7 meta-info'>{date}</span>
          <AiOutlineTags className='icon is-primary' />
          {tags.map(tag => (
            <Link className='tag-text is-size-7' to={`/tags/${tag}`} key={`/tags/${tag}`}>
              {tag}
            </Link>
          ))}
        </div>
        <hr className='divider' />
        <div className='columns blog-card-columns'>
          {featuredimage && (
            <div className='column is-12'>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                  width: featuredimage.childImageSharp.gatsbyImageData.width,
                  height: featuredimage.childImageSharp.gatsbyImageData.height,
                }}
                className='blog-image'
              />
            </div>
          )}
          <div className='column is-12 excerpt-column'>
            <p className='is-size-6 excerpt'>{excerpt}</p>
            <Link className='button is-primary is-outlined' to={slug}>
              Keep Reading →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
