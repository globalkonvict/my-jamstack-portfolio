import React, { useState } from "react";
import { Link } from "gatsby";
import FullWidthNavigationMenu from "./FullWidthNav";

const Navbar = () => {
  const [navActive, setNavActive] = useState("");

  const toggleHamburger = () => {
    setNavActive(navActive === "" ? "is-active" : "");
  };

  if (window.location.pathname === "/") {
    return <FullWidthNavigationMenu />;
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item logo-text" title="Logo">
            GlobalKonvict
          </Link>
          <div
            className={`navbar-burger burger ${navActive}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navActive}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a className="navbar-item" href="/admin/">
              Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
