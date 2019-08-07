import React from 'react';
import { Link } from 'react-router-dom';
import classes from './heading.module.scss';

const heading = ({ title, pagePath }) => (
  <div className={classes.Heading}>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{title}</h1>
        </div>
        <div className="col">
          <ul className="list-unstyled list-inline">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <p>
                <span>\</span>
                {pagePath}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default heading;
