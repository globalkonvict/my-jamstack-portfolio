import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from '@components/BlogCard';

export class BlogRollTemplate extends React.Component {
  render() {
    const { data, total } = this.props;
    const { edges } = data.allMarkdownRemark;
    const posts = total ? edges.slice(0, total) : edges;
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

export default function BlogRoll({ total }) {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
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
                  date(formatString: "MMMM DD, YYYY hh:mm A")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(quality: 30, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} total={total} />}
    />
  );
}
