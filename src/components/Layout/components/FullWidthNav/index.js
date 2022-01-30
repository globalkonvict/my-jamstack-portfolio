import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.sass";

const FullWidthNavigationMenu = () => {
  const [navActive, setNavActive] = useState("");

  const toggleNav = (e) => {
    setNavActive(navActive === "" ? "nav-active" : "");
  };

  return (
    <>
      <Helmet>
        <body className={navActive} />
      </Helmet>
      <div
        role="button"
        className="menu-icon"
        onClick={toggleNav}
        onKeyPress={toggleNav}
        tabIndex={0}
      >
        <span className="icon">
          {navActive === "nav-active" ? (
            <FaTimes className="menu-icon-toggle" />
          ) : (
            <FaBars className="menu-icon-toggle" />
          )}
        </span>
      </div>
      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link">
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FullWidthNavigationMenu;
