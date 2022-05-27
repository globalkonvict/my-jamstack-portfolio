import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { BlogRollTemplate } from '@components/BlogRoll';

const TagRoute = ({ data, pageContext }) => {
  const tag = pageContext.tag;
  const title = data.site.siteMetadata.title;
  const totalCount = data.allMarkdownRemark.totalCount;
  const tagCapitalized = `${tag[0].toUpperCase()}${tag.slice(1)}`;
  return (
    <section className='section latest-stories section--gradient'>
      <Helmet title={`${tagCapitalized} | ${title}`} />
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <div className='column is-12'>
            <div className='content'>
              <div className='column is-12'>
                <h3 className='has-text-weight-semibold is-size-3 latest-stories-title'>{`Latest Articles in ${tagCapitalized}`}</h3>
                <BlogRollTemplate data={data} total={totalCount} />
                <div className='column is-12 has-text-centered'>
                  <Link className='button read-more-stories-btn is-primary go-nack-to-home-btn' to='/tags/'>
                    Browse all tags
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 120)
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
`;
