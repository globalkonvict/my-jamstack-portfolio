import React from "react";

function Card({ title, description, image, link }) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Component</p>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Save
        </a>
      </footer>
    </div>
  );
}

export default Card;
