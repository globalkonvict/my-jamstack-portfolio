import { graphql } from 'gatsby';
import { HTMLContent } from '@components/Content';
import AboutPageTemplate from '@templates/AboutPageTemplate';

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />;
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
