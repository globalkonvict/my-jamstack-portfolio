import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineTags } from 'react-icons/ai';
import Content from '../components/Content';

const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet, date }) => {
  const PostContent = contentComponent || Content;

  return (
    <section className='section'>
      {helmet || ''}
      <div className='container card content blog-post'>
        <div className='columns is-mobile'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 is-bold-light'>{title}</h1>
            <div className='blog-meta'>
              <span className='icon  has-text-info'>
                <GoCalendar />
              </span>
              <span className='is-size-7 meta-info'>{date}</span>
              <span className='icon  has-text-info'>
                <AiOutlineTags />
              </span>
              {tags.map(tag => (
                <Link className='tag-text is-size-7' to={`/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <hr className='divider' />
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostTemplate;
