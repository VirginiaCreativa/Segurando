import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Logo from '../logo/logo';
import classes from './header.module.scss';

const Header = ({ selectsColor, match }) => {
  const selectBlack = {
    color: '#48505a',
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCwyMzUuMzE4SDIwLjY4MkM5LjI2LDIzNS4zMTgsMCwyNDQuNTc3LDAsMjU2czkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcwLjYzNiAgICBjMTEuNDIzLDAsMjAuNjgyLTkuMjU5LDIwLjY4Mi0yMC42ODJDNTEyLDI0NC41NzgsNTAyLjc0MSwyMzUuMzE4LDQ5MS4zMTgsMjM1LjMxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0ODUwNUEiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MS4zMTgsNzguNDM5SDIwLjY4MkM5LjI2LDc4LjQzOSwwLDg3LjY5OSwwLDk5LjEyMWMwLDExLjQyMiw5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYgICAgYzExLjQyMywwLDIwLjY4Mi05LjI2LDIwLjY4Mi0yMC42ODJDNTEyLDg3LjY5OSw1MDIuNzQxLDc4LjQzOSw0OTEuMzE4LDc4LjQzOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM0ODUwNUEiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MS4zMTgsMzkyLjE5N0gyMC42ODJDOS4yNiwzOTIuMTk3LDAsNDAxLjQ1NiwwLDQxMi44NzlzOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2ICAgIGMxMS40MjMsMCwyMC42ODItOS4yNTksMjAuNjgyLTIwLjY4MlM1MDIuNzQxLDM5Mi4xOTcsNDkxLjMxOCwzOTIuMTk3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzQ4NTA1QSI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=')",
  };
  const selectWhite = {
    color: '#fff',
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCwyMzUuMzE4SDIwLjY4MkM5LjI2LDIzNS4zMTgsMCwyNDQuNTc3LDAsMjU2czkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcwLjYzNiAgICBjMTEuNDIzLDAsMjAuNjgyLTkuMjU5LDIwLjY4Mi0yMC42ODJDNTEyLDI0NC41NzgsNTAyLjc0MSwyMzUuMzE4LDQ5MS4zMTgsMjM1LjMxOHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MS4zMTgsNzguNDM5SDIwLjY4MkM5LjI2LDc4LjQzOSwwLDg3LjY5OSwwLDk5LjEyMWMwLDExLjQyMiw5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYgICAgYzExLjQyMywwLDIwLjY4Mi05LjI2LDIwLjY4Mi0yMC42ODJDNTEyLDg3LjY5OSw1MDIuNzQxLDc4LjQzOSw0OTEuMzE4LDc4LjQzOXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MS4zMTgsMzkyLjE5N0gyMC42ODJDOS4yNiwzOTIuMTk3LDAsNDAxLjQ1NiwwLDQxMi44NzlzOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2ICAgIGMxMS40MjMsMCwyMC42ODItOS4yNTksMjAuNjgyLTIwLjY4MlM1MDIuNzQxLDM5Mi4xOTcsNDkxLjMxOCwzOTIuMTk3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=')",
  };

  const selects = selectsColor === 1 ? selectBlack : selectWhite;

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
              <span className="navbar-toggler-icon" style={selects} />
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
    selectsColor: state.Global.selectLogo,
    router: state.router,
  }))
)(Header);
