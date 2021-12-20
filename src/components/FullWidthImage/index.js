import React from "react";
import PropTypes from "prop-types";
import Typical from "react-typical";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import "./index.sass";

export default function FullWidthImage(props) {
  const {
    height = "calc(100vh - 52px)",
    imgPosition = "top left",
    authorData,
  } = props;
  const { introduction, image, typingText, background, about } = authorData;
  console.log(authorData);
  return (
    <div className="hero-container">
      <div className="container">
        <div className=" columns is-vcentered is-centered hero-columns">
          <div className="column is-one-third author-image">
            <GatsbyImage
              image={getImage(image)}
              objectFit={"cover"}
              className="profile-img"
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="column  hero-text-container">
            {(introduction || image) && (
              <div className="hero-description">
                {introduction && (
                  <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen fira-font heading-main">
                    {introduction}
                  </h1>
                )}
                {typingText && (
                  <span className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen fira-font heading-main">
                    <Typical
                      steps={typingText
                        .map((item) => {
                          return [item.iAm, item.delay];
                        })
                        .flat()}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </span>
                )}
                <p
                  className="about-me"
                  dangerouslySetInnerHTML={{
                    __html: about
                      .replaceAll("[", '<span class="highlight">')
                      .replaceAll("]", "</span>"),
                  }}
                ></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
