import { graphql, useStaticQuery } from 'gatsby';

/**
 * The useSiteSettings function returns the site settings from the Markdown files from the src/pages/settings/index.md.
 * @return A collection of settings that are stored in the site's markdown files
 */
const useSiteSettings = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SITE_SETTINGS_QUERY {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "settings" } } }) {
          nodes {
            frontmatter {
              authorName
              aboutAuthor
              social {
                github
                linkedin
                instagram
                stackoverflow
                twitter
              }
            }
          }
        }
      }
    `,
  );
  return allMarkdownRemark.nodes[0].frontmatter;
};

export default useSiteSettings;
