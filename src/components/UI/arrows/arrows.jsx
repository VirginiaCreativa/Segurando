import React from 'react';
import classes from './arrows.module.scss';

import arrow from '../../../assets/icons/arrow.svg';

const Arrows = ({ select }) => (
  <div className={classes.Arrows}>
    {select === 'l' ? (
      <div className={classes.ArrowL} />
    ) : (
      <div className={classes.ArrowR} />
    )}
  </div>
);

export default Arrows;
