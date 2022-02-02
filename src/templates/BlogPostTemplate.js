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
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
              <span>{title}</span>
            </h1>
            <div className='blog-meta'>
              <GoCalendar className='icon is-primary' />
              <span className='is-size-7 meta-info'>{date}</span>
              <AiOutlineTags className='icon is-primary' />
              {tags.map(tag => (
                <Link className='tag-text is-size-7' to={`/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <hr className='divider' />
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className='taglist'>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostTemplate;
