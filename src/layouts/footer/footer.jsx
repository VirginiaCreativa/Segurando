import React from 'react';
import { Link } from 'react-router-dom';
import classes from './footer.module.scss';
import WhiteLogo from '../../assets/logo/19_01_UX_SG_Logo_White_V1.svg';
import { getSelectLogo } from '../../redux/actions/GlobalAction';

const Footer = () => {
  const year = 2019;

  return (
    <div className={classes.Footer}>
      <div className={classes.Top}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={WhiteLogo}
                alt="Logo Segurando"
                className={[classes.Logo, 'img-fluid'].join(' ')}
              />
              <p>
                Laborum labore eu Lorem ullamco ipsum dolore et laboris velit in
                nisi amet anim.
              </p>
            </div>
            <div className="col">
              <h4>Categorías</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/formacion">Formación</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Contactanos</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Telefóno</h4>
            </div>
            <div className="col">
              <h4>Subcribre</h4>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.Bottom}>
        <div className="container">
          <p>©{year} By: Tech and Solve, Medellin</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
