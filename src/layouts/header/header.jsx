/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './header.module.scss';
import '../../../node_modules/jquery/dist/jquery.min.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

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
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Formación
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contáctanos
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
