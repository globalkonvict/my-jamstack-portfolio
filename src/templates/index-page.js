import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LatestStories from "../components/LatestStories";
import FullWidthImage from "../components/FullWidthImage";

/**
 * @description This is index page template, partially separated from main layout. This allows using partial templates for CMS Previews.
 * @param {Object} param0 Props used to display page data
 * @returns JSX.Element
 */

const IndexPageTemplate = ({ authorData, skills, projects }) => {
  return (
    <>
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
    </>
  );
};

IndexPageTemplate.propTypes = {
  authorData: PropTypes.object,
  skills: PropTypes.object,
  projects: PropTypes.object,
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

IndexPage.Template = IndexPageTemplate;

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
