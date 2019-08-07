/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './footer.module.scss';
import WhiteLogo from '../../assets/logo/19_01_UX_SG_Logo_White_V1.svg';
import { getSelectLogo } from '../../redux/actions/GlobalAction';

const Footer = () => {
  const year = 2019;
  const siteTech = <a target="_blank" href="https://techandsolve.com/es/" />;
  return (
    <div className={classes.Footer}>
      <div className={classes.Top}>
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-md-3 col-sm-12">
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
            <div className="col-md-2 col-sm-12 ">
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
            <div className="col-md-2 col-sm-12">
              <div className={classes.Space}>
                <h4>Dirección</h4>
                <p>Carrera 7 # 26-20, Piso 4 Edificio</p>
                <p>Medellín, Colombia</p>
              </div>
              <div className={classes.Space}>
                <h4>Teléfonos</h4>
                <p>Pbx: (+574) 243 64 20</p>
                <p>Fax: (+574) 210 70 21</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Subcribre</h4>
              <div className={classes.FormSubcrib}>
                <input type="text" placeholder="Tu e-mail" />
                <button type="submit">
                  <i className="bx bx-right-arrow-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.Bottom}>
        <div className="container">
          <p>
            Copyright ©{year}{' '}
            <a target="_blank" href="https://techandsolve.com/es/">
              Tech and Solve
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
