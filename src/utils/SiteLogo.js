import { graphql, useStaticQuery } from 'gatsby';

const useSiteLogo = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query GET_SITELOGO_QUERY {
        allFile(filter: { name: { eq: "GK_LOGO" } }) {
          nodes {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 42, formats: AUTO, layout: CONSTRAINED, placeholder: TRACED_SVG, quality: 50)
            }
          }
        }
      }
    `,
  );
  return allFile.nodes[0];
};

export default useSiteMetadata;
