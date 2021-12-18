import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  authorData,
  skills,
  projects,
}) => {
  const heroImage = getImage(image) || image;
  return (
    <div>
      <FullWidthImage
        img={authorData.background}
        title={title}
        subheading={subheading}
        authorData={authorData}
      />
      <Skills
        skills={skills.list}
        title={skills.title}
        subtitle={skills.subtitle}
      />
      <Projects title={projects.title} projects={projects.list} subtitle={projects.subtitle} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Articles
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  authorData: PropTypes.object,
};

IndexPageTemplate.defaultProps = {
  authorData: { name: "", typingText: [] },
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <IndexPageTemplate
        projects={frontmatter.projects}
        skills={frontmatter.skills}
        authorData={frontmatter.authorData}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        skills {
          title
          subtitle
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
                gatsbyImageData( quality: 64, layout: CONSTRAINED)
              }
            }
            links {
              url
              text
            }
            description
          }
        }
        authorData {
          introduction
          image {
            childImageSharp {
              gatsbyImageData(width: 350, quality: 64, layout: CONSTRAINED)
            }
          }
          typingText {
            delay
            iAm
          }
        }
      }
    }
  }
`;
