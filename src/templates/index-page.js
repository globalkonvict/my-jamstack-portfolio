import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Skills from '../components/Skills';
import Projects from '../components/Projects';
import LatestStories from '../components/LatestStories';
import FullWidthImage from '../components/FullWidthImage';

/**
 * @description This is index page template, partially separated from main layout. This allows using partial templates for CMS Previews.
 * @param {Object} param0 Props used to display page data
 * @returns JSX.Element
 */

const IndexPageTemplate = ({ authorData, skills, projects }) => {
  return (
    <>
      <FullWidthImage authorData={authorData} />
      <Skills skills={skills.list} title={skills.title} subtitle={skills.subtitle} extra={skills.extra} />
      <Projects title={projects.title} projects={projects.list} subtitle={projects.subtitle} />
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
  authorData: { name: '', typingText: [] },
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <IndexPageTemplate
      projects={frontmatter.projects}
      skills={frontmatter.skills}
      authorData={frontmatter.authorData}
    />
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
              gatsbyImageData(quality: 50, layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
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
                gatsbyImageData(quality: 30, layout: CONSTRAINED, placeholder: BLURRED)
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
                gatsbyImageData(quality: 64, layout: CONSTRAINED, placeholder: BLURRED)
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
