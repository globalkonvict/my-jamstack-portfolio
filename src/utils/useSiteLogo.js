import { graphql, useStaticQuery } from 'gatsby';

const useSiteLogo = () => {
  const { file } = useStaticQuery(graphql`
    query SITE_LOGO {
      file(name: { eq: "GK_LOGO" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  return file.childImageSharp.gatsbyImageData;
};

export default useSiteLogo;
