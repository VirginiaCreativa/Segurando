import React from 'react';
import classes from './sidebar.module.scss';

const Buscador = () => (
  <div className={classes.Buscador}>
    <input type="text" placeholder="Buscador" />
    <i className="bx bx-search" />
  </div>
);

export default Buscador;
