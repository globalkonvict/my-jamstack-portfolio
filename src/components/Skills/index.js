import classNames from "classnames";
import React, { useState } from "react";
import "./index.sass";

function Skills({ skills = [], title, subtitle }) {
  const [tabs, setTabs] = useState("all");
  const onTabChange = (tab) => {
    setTabs(tab);
  };
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
                <div class="tabs is-fullwidth">
                  <ul>
                    <li
                      className={classNames({ "is-active": tabs === "all" })}
                      onClick={() => onTabChange("all")}
                    >
                      <a>All</a>
                    </li>
                    <li
                      className={classNames({ "is-active": tabs === "lang" })}
                      onClick={() => onTabChange("lang")}
                    >
                      <a>Language</a>
                    </li>
                    <li
                      className={classNames({ "is-active": tabs === "frame" })}
                      onClick={() => onTabChange("frame")}
                    >
                      <a>Framework</a>
                    </li>
                    <li
                      className={classNames({ "is-active": tabs === "tools" })}
                      onClick={() => onTabChange("tools")}
                    >
                      <a>Tools</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="skills__content columns is-multiline is-mobile">
                {skills.map((icon) => {
                  if (tabs === "all" || icon.type === tabs) {
                    return (
                      <div className="column" key={icon.classNames}>
                        {icon?.image?.publicURL ? (
                          <img className="skills__icons" src={icon?.image?.publicURL} />
                        ) : (
                          <i className={`${icon.classNames} skills__icons`}></i>
                        )}
                      </div>
                    );
                  }
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
