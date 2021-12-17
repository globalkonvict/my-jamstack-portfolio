import React from "react";
import "./index.sass";

function Skills({ skills = [], title, subtitle }) {
  return (
    <section className="section section__skills">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="skills">
              <div className="skills__heading">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                  {title || "Skills"}
                </h2>
                <p className="subtitle is-size-5 has-text-centered">
                 {subtitle || "Some of the skills I have worked on"}
                </p>
              </div>
              <div className="skills__content columns is-multiline is-mobile">
                {skills.map((icon) => {
                  return (
                    <div className="column" key={icon.classNames}>
                      <i className={`${icon.classNames} skills__icons`}></i>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
