import * as React from "react";
import { Link } from "gatsby";

import useSiteSettings from "../../../utils/SiteSettings";

import stackoverflow from "../../../img/social/stackoverflow.svg";
import instagram from "../../../img/social/instagram.svg";
import linkedin from "../../../img/social/linkedin.svg";
import twitter from "../../../img/social/twitter.svg";
import github from "../../../img/social/github.svg";

const Footer = () => {
  const [frontmatter] = useSiteSettings();
  const { social } = frontmatter.frontmatter;

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <p className="is-size-1 is-size-3-mobile footer-logo">GlobalKonvict</p>
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              {social.github && (
                <a title="facebook" href={social.github}>
                  <img
                    src={github}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              )}
              {social.stackoverflow && (
                <a title="facebook" href={social.stackoverflow}>
                  <img
                    src={stackoverflow}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              )}
              {social.linkedin && (
                <a title="facebook" href={social.linkedin}>
                  <img
                    src={linkedin}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              )}
              {social.twitter && (
                <a title="twitter" href={social.twitter}>
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              )}

              {social.instagram && (
                <a title="instagram" href={social.instagram}>
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
