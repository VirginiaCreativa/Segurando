import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Logo from '../logo/logo';
import classes from './header.module.scss';

const Header = ({ selectLogo, match }) => {
  const selectBlack = {
    color: '#48505a',
  };
  const selectWhite = {
    color: '#fff',
  };

  const selects = selectLogo === 1 ? selectBlack : selectWhite;

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <span className="navbar-brand mr-auto">
              <Logo />
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0"
              id="navbarSupportedContent">
              <ul className="navbar-nav text-right">
                <li className="nav-item active">
                  <NavLink
                    to="/"
                    exact
                    style={selects}
                    activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/formacion"
                    exact
                    style={selects}
                    activeClassName="active">
                    Formación
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    exact
                    style={selects}
                    activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contacto"
                    exact
                    style={selects}
                    activeClassName="active">
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default compose(
  withRouter,
  connect(state => ({
    selectLogo: state.Global.selectLogo,
    router: state.router,
  }))
)(Header);
