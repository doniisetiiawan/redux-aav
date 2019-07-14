import React, { Component } from 'react';

import NavBar from './NavBar';
import A from './A';
import Logo from './Logo';
import HeaderLink from './HeaderLink';

class Header extends Component {
  static get renderUnauthenticate() {
    return (
      <div>
        <HeaderLink to="/register">Register</HeaderLink>
        <HeaderLink to="/login">Login</HeaderLink>
      </div>
    );
  }

  static get renderRight() {
    return Header.renderUnauthenticate;
  }

  render() {
    return (
      <div>
        <NavBar>
          <div>
            <A to="/">
              <Logo alt="Rask Lege" />
            </A>
          </div>
          {Header.renderRight}
        </NavBar>
      </div>
    );
  }
}

export default Header;
