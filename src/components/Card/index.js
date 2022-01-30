import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { CgMoreVerticalO } from "react-icons/cg";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";

import "./index.sass";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Card({ title, description, image, links }) {
  const [hovering, setHovering] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const onMouseEnter = (e) => {
    setHovering(true);
  };
  const onMouseLeave = (e) => {
    setHovering(false);
  };
  return (
    <div className="card project-card">
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
        contentLabel="Example Modal"
      ></Modal>
      <GatsbyImage
        image={getImage(image)}
        objectFit={"cover"}
        alt={title}
        formats={["auto", "webp", "avif"]}
        className={classNames("project-card__image", {
          "project-card__image__hover": hovering,
        })}
      />
      <div
        className="project-card__content"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="columns is-multiline is-mobile">
          <div className="column is-11 is-offset-1">
            <p className="is-size-1 is-bold project-card__title">{title}</p>
          </div>
          <div className="column is-11 is-offset-1">
            <div className="tags-container columns is-multiline is-mobile">
              {links.map((link) => {
                return (
                  <Link
                    className="tag is-medium tech-tag is-primary"
                    to={link.url}
                    key={link.text}
                  >
                    {link.className && (
                      <i
                        className={classNames("is-size-4", link.className)}
                      ></i>
                    )}
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="column is-11 is-offset-1">
            <button className="button is-rounded is-danger more-btn">
              <span className="icon is-small">
                <CgMoreVerticalO className="project-card__btn" />
              </span>
              <span>More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
