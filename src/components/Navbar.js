import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import logo from '../img/logo.svg';
import { pageUrls } from '../config/pageSetting';
import { DEFAULT_LANG } from '../config/langSetting';
import Button from './Atoms/Button';
import Box from './Atoms/Box';
import Container from './Atoms/Container';

const NavbarWrapper = styled.nav`
  && {
    transition: background-color 100ms ease-in;
    background-color: rgba(20,54,76, 0.95);
    @media screen and (min-width: 769px) {
      background-color: transparent;
      ${props => props.hasBackground && css`
        background-color: rgb(20,54,76); /* The Fallback */
        background-color: rgba(20,54,76, 0.95);
      `}
    }
  }
  ${space}
`;

const StyledLogo = styled.img`
  width: 100%;
  height: auto;
`;

const StyledNavbarLink = styled(Link)`
  && {
    padding: 16px 24px;
    @media screen and (min-width: 769px) {
        padding: 8px 24px;
    }
    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledBrand = styled.div`
  ${space}
`;

const StyledLoginButton = styled(Link)`
  ${space}
  &&:hover {
    background-color: transparent;
  }
`;

@observer
class Navbar extends React.Component {
  @observable active = false;

  @observable navBarActiveClass = '';

  @observable scrolledDown = false;

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.active = !this.active;
    this.navBarActiveClass = this.active ? 'is-active' : '';
  };

  handleScroll = (e) => {
    const scrollTop = window.pageYOffset;
    this.scrolledDown = scrollTop > 20;
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  render() {
    const { lang } = this.props;
    const pathPrefix = lang === DEFAULT_LANG ? '' : `/${lang}`;

    return (
      <NavbarWrapper
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main-navigation"
        hasBackground={this.scrolledDown}
        py={2}
      >
        <Container>
          <StyledBrand className="navbar-brand" px={2}>
            <Link to={`${pathPrefix}/`} className="navbar-item" title="Logo">
              <Box width={[70, 70, 120]} height="auto">
                <StyledLogo src={logo} alt="Plutux" />
              </Box>
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
          </StyledBrand>
          <div id="navMenu" className={`navbar-menu ${this.navBarActiveClass}`}>
            <div className="navbar-end has-text-centered">
              <StyledNavbarLink className="navbar-item" to={`${pathPrefix}${pageUrls.offeringsSection.url}`}>
                {pageUrls.offeringsSection.title}
              </StyledNavbarLink>
              <StyledNavbarLink className="navbar-item" to={`${pathPrefix}${pageUrls.productSection.url}`}>
                {pageUrls.productSection.title}
              </StyledNavbarLink>
              <StyledNavbarLink className="navbar-item" to={`${pathPrefix}${pageUrls.teamSection.url}`}>
                {pageUrls.teamSection.title}
              </StyledNavbarLink>
              <StyledNavbarLink className="navbar-item" to={`${pathPrefix}${pageUrls.blog.url}`}>
                {pageUrls.blog.title}
              </StyledNavbarLink>
              <StyledLoginButton className="navbar-item" to={`${pathPrefix}${pageUrls.news.url}`} p={0} mx={2} mr={3}>
                <Button text="login" className="is-primary is-inverted is-outlined" />
              </StyledLoginButton>
            </div>
          </div>
        </Container>
      </NavbarWrapper>
    );
  }
}

export default Navbar;
