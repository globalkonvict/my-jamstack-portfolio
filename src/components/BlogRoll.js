import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from './BlogCard';

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className='columns is-mobile is-multiline'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column  is-6-tablet is-12-mobile' key={post.id}>
              <BlogCard
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                date={post.frontmatter.date}
                slug={post.fields.slug}
                featuredimage={post.frontmatter.featuredimage}
                tags={post.frontmatter.tags}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            limit: 4
          ) {
            edges {
              node {
                excerpt(pruneLength: 120)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
