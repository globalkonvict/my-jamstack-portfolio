import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LatestStories from "../components/LatestStories";
import FullWidthImage from "../components/FullWidthImage";

export const IndexPageTemplate = ({ authorData, skills, projects }) => {
  return (
    <div>
      <FullWidthImage authorData={authorData} />
      <Skills
        skills={skills.list}
        title={skills.title}
        subtitle={skills.subtitle}
        extra={skills.extra}
      />
      <Projects
        title={projects.title}
        projects={projects.list}
        subtitle={projects.subtitle}
      />
      <LatestStories />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  authorData: PropTypes.object,
};

IndexPageTemplate.defaultProps = {
  authorData: { name: "", typingText: [] },
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        projects={frontmatter.projects}
        skills={frontmatter.skills}
        authorData={frontmatter.authorData}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        authorData {
          background {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(width: 350, quality: 64, layout: CONSTRAINED)
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
                gatsbyImageData(quality: 64, layout: CONSTRAINED)
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
