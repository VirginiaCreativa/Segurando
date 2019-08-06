import React from 'react';
import classes from './reactid.module.scss';

const BoxReactid = ({ count, formacion }) => (
  <div className={classes.BoxReActid}>
    <h1>
      <span>+</span>
      {count}
    </h1>
    <div className={classes.LineGreen} />
    <h6>{formacion}</h6>
  </div>
);

export default BoxReactid;
