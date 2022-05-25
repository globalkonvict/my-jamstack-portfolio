import { Link } from 'gatsby';
import { GoCalendar } from 'react-icons/go';
import PreviewCompatibleImage from '@components/PreviewCompatibleImage';

import './index.sass';

const BlogCard = ({ title, date, excerpt, featuredimage, slug, tags }) => {
  const tagsSlice = tags.length > 4 ? tags.slice(0, 5) : tags;
  return (
    <div className='columns is-mobile is-multiline card blog-card'>
      <div className='column is-6-desktop is-12-mobile blog-card-image'>
        {featuredimage && (
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post ${title}`,
              width: featuredimage.childImageSharp.gatsbyImageData.width,
              height: featuredimage.childImageSharp.gatsbyImageData.height,
            }}
            className='blog-image'
          />
        )}
      </div>
      <div className='column is-6-desktop is-12-mobile blog-card-meta-column'>
        <div className='columns is-multiline'>
          <div className='column is-12'>
            <Link to={slug}>
              <h3 className='title blog-card-title is-size-3-widescreen is-size-5-desktop'>{title}</h3>
            </Link>
            <div className='blog-meta '>
              <span className='blog-card-date'>
                <span className='icon has-text-info'>
                  <GoCalendar />
                </span>
                <span className='is-size-7 meta-info'>{date}</span>
              </span>
              <div className='tags tags-container'>
                {tagsSlice.map(tag => (
                  <Link className='tag is-primary is-size-7' to={`/tags/${tag}`} key={`/tags/${tag}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='column is-12 excerpt-column'>
            <p className='is-size-7 blog-card-excerpt'>{excerpt}</p>
            <Link className='button blog-card-btn is-primary is-outlined is-size-7' to={slug}>
              Keep Reading →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
