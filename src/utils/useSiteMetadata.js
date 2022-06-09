import { graphql, useStaticQuery } from 'gatsby';

/**
 * The useSiteMetadata function returns the site metadata from the GraphQL query.
 * @return A siteMetadata object
 *
 */
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            aboutMeBrief
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
