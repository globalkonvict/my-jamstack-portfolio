import React, { useState } from "react";
import classNames from "classnames";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import MarkdownContent from "../Content";
import "./index.sass";

/* eslint-disable */
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
                  {title}
                </h2>
                <p className="subtitle is-size-5 has-text-centered">
                  {subtitle}
                </p>
                <div className="tabs is-fullwidth">
                  <ul>
                    <li
                      className={classNames(
                        { "is-active": tabs === "all" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("all")}
                      onKeyDown={() => onTabChange("all")}
                    >
                      All
                    </li>
                    <li
                      className={classNames(
                        { "is-active": tabs === "language" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("language")}
                      onKeyDown={() => onTabChange("language")}
                    >
                      Languages
                    </li>
                    <li
                      className={classNames(
                        { "is-active": tabs === "framework" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("framework")}
                      onKeyDown={() => onTabChange("framework")}
                    >
                      Frameworks
                    </li>
                    <li
                      className={classNames(
                        { "is-active": tabs === "tools" },
                        "tabs__item"
                      )}
                      onClick={() => onTabChange("tools")}
                      onKeyDown={() => onTabChange("tools")}
                    >
                      Tools
                    </li>
                  </ul>
                </div>
              </div>
              <div className="skills__content columns is-multiline is-mobile is-centered">
                {skills.map((icon) => {
                  if (tabs === "all" || icon.type === tabs) {
                    return (
                      <div
                        className="column is-centered is-2-tablet is-4-mobile has-text-centered"
                        key={icon.classNames}
                      >
                        {icon?.image ? (
                          <GatsbyImage
                            image={getImage(icon?.image)}
                            objectFit="contain"
                            className="skills__icons"
                            formats={["auto", "webp", "avif"]}
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
              {extra ? (
                <div className="skills__footer">
                  <MarkdownContent content={extra ?? ""} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
