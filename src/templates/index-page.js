import { graphql } from 'gatsby';
import IndexPageTemplate from './IndexPageTemplate';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <IndexPageTemplate projects={frontmatter.projects} skills={frontmatter.skills} authorData={frontmatter.authorData} />;
};

IndexPage.Template = IndexPageTemplate;

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        authorData {
          background {
            childImageSharp {
              gatsbyImageData(quality: 40, layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(width: 350, quality: 40, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
          introduction
          about
          typingText {
            delay
            iAm
          }
        }
        skills {
          title
          subtitle
          extra
          list {
            type
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(quality: 5, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            classNames
            skillName
          }
        }
        projects {
          title
          subtitle
          list {
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 10, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            links {
              url
              text
            }
            description
          }
        }
      }
    }
  }
`;
