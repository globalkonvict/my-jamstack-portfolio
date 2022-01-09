import { graphql, useStaticQuery } from "gatsby";

const useSiteSettings = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SITE_SETTINGS_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "settings" } } }
        ) {
          nodes {
            frontmatter {
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
    `
  );
  return allMarkdownRemark.nodes;
};

export default useSiteSettings;
