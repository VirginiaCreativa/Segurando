import React from 'react';
import classes from './reactid.module.scss';

const BoxReactid = ({ number, title }) => (
  <div className={classes.BoxReActid}>
    <h1>
      <span>+</span>
      {number}
    </h1>
    <div className={classes.LineGreen} />
    <h6>{title}</h6>
  </div>
);

export default BoxReactid;
