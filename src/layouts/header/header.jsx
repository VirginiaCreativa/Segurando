/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './header.module.scss';

import Logo from '../logo/logo';

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
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </>
);

export default header;
