import { Link } from 'gatsby';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineTags } from 'react-icons/ai';
import { Disqus } from 'gatsby-plugin-disqus';
import Content from '@components/Content';
import Sidebar from '@components/Sidebar';

const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet, date }) => {
  const PostContent = contentComponent || Content;

  return (
    <section className='section'>
      {helmet || ''}
      <div className='container content blog-post'>
        <div className='columns is-mobile is-multiline'>
          <div className='column card is-8-desktop is-12-mobile has-margin-top-24'>
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
            <PostContent content={content} />
          </div>
          <div className='column is-3-desktop is-6-tablet is-offset-3-tablet is-offset-1-desktop is-12-mobile has-margin-top-24'>
            <Sidebar />
          </div>
        </div>
      </div>
      <Disqus
        config={{
          url: `${process.env.GATSBY_SITE_BLOG_URL}${title}`,
          identifier: title,
          title: title,
        }}
      />
    </section>
  );
};

export default BlogPostTemplate;
