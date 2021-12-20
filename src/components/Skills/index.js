import classNames from "classnames";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./index.sass";

function Skills({ skills = [], title, subtitle, extra = "" }) {
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
                      className={classNames(
                        { "is-active": tabs === "all" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("all")}
                    >
                      <a>All</a>
                    </li>
                    <li
                      className={classNames(
                        { "is-active": tabs === "lang" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("lang")}
                    >
                      <a>Language</a>
                    </li>
                    <li
                      className={classNames(
                        { "is-active": tabs === "frame" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("frame")}
                    >
                      <a>Framework</a>
                    </li>
                    <li
                      className={classNames(
                        { "is-active": tabs === "tools" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("tools")}
                    >
                      <a>Tools</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="skills__content columns is-multiline is-mobile is-centered">
                {skills.map((icon) => {
                  if (tabs === "all" || icon.type === tabs) {
                    return (
                      <div
                        className="column is-centered has-text-centered"
                        key={icon.classNames}
                      >
                        {icon?.image?.publicURL ? (
                          <img
                            className="skills__icons"
                            src={icon?.image?.publicURL}
                          />
                        ) : (
                          <i className={`${icon.classNames} skills__icons`}></i>
                        )}
                        <p className="skills__icons-text font-mono">
                          {icon.skillName}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="skills__footer">
                <ReactMarkdown>{extra ? extra : ""}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
