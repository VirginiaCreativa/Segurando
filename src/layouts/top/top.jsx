import React from 'react';
import classes from './top.module.scss';

const top = () => (
  <div className={classes.Top}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-none d-sm-block d-md-none d-lg-block">
          <div className="colGrid_2">
            <p>LLamalo: (+574) 322 23 23</p>
            <span>|</span>
            <p>Email: info@segurando.com</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="colGrid_2 d-flex justify-content-end">
            <a href="/help">
              <box-icon name="help-circle" />
              Tiene alguna pregunta
            </a>
            <span>|</span>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <box-icon type="logo" name="facebook" />
              </li>
              <li className="list-inline-item">
                <box-icon type="logo" name="twitter" />
              </li>
              <li className="list-inline-item">
                <box-icon type="logo" name="youtube" />
              </li>
              <li className="list-inline-item">
                <box-icon type="logo" name="instagram" />
              </li>
              <li className="list-inline-item">
                <box-icon type="logo" name="linkedin" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default top;
