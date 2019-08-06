import React from 'react';
import classes from './spinner.module.scss';

const Spinner = () => (
  <>
    <div className={classes.SpinnerWrapper}>
      <div className={classes.Spinner} />
    </div>
  </>
);

export default Spinner;
