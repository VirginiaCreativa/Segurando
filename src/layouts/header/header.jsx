import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import classes from './header.module.scss';

const header = () => (
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
                  data-menusetting="0"
                  activeClassName="selected"
                  className="linkActive">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/formacion"
                  data-menusetting="0"
                  activeClassName="selected">
                  Formación
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/formacion"
                  data-menusetting="0"
                  activeClassName="selected">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/formacion"
                  data-menusetting="0"
                  activeClassName="selected">
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

export default header;
