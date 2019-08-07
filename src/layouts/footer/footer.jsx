import React from 'react';
import classes from './footer.module.scss';

const footer = () => {
  const year = 2019;
  return (
    <div className={classes.Footer}>
      <div className={classes.Top}>
        <div className="container">
          <div className="row">
            <div className="col">logo</div>
            <div className="col">categoria</div>
            <div className="col">Direccion</div>
            <div className="col">Busccador</div>
          </div>
        </div>
      </div>
      <div className={classes.Bottom}>
        <hr />
        <div className="container">
          <p>©{year} By: Tech and Solve, Medellin</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
