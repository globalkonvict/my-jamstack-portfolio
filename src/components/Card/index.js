import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

function Card({ title, description, image, links }) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-image">
        <GatsbyImage
          image={getImage(image)}
          objectFit={"cover"}
          alt={title}
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="card-content">
        <div className="content">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
      <footer className="card-footer">
        {links.map((link) => {
          return (
            <a
              className="card-footer-item"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          );
        })}
      </footer>
    </div>
  );
}

export default Card;
