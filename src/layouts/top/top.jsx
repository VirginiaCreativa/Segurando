import React from 'react';
import { Link } from 'react-router-dom';
import classes from './top.module.scss';

const top = () => (
  <div className={classes.Top}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-none d-sm-block d-md-none d-lg-block">
          <div className="colGrid_3">
            <p>LLamalo: (+574) 322 23 23</p>
            <span>|</span>
            <p>Email: info@segurando.com</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="colGrid_3 justify-content-end">
            <a href="/help">
              <i className="bx bx-help-circle" />
              Tiene alguna pregunta
            </a>
            <span>|</span>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default top;
