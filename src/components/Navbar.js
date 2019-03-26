import React from "react";
import { Link } from "gatsby";
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import logo from "../img/logo.svg";
import { pageUrls } from '../config/pageSetting';

@observer
class Navbar extends React.Component {
  @observable active = false;

  @observable navBarActiveClass = '';

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.active = !this.active;
    this.navBarActiveClass = this.active ? 'is-active' : '';
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to={pageUrls.contact.url}>
                {pageUrls.contact.title}
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to={pageUrls.about.url}>
                  {pageUrls.about.title}
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to={pageUrls.corporateProfile.url}>
                    {pageUrls.corporateProfile.title}
                  </Link>
                  <Link className="navbar-item" to={pageUrls.ourBusiness.url}>
                    {pageUrls.ourBusiness.title}
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to={pageUrls.investor.url}>
                {pageUrls.investor.title}
              </Link>
              <Link className="navbar-item" to={pageUrls.news.url}>
                {pageUrls.news.title}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
