import React from 'react';
import classes from './formacion.module.scss';

const pathToAssets = require.context('../../../assets', true);

const FormacionItem = ({ formacion, title, image, date }) => (
  <div className={classes.FormacionItem}>
    <div className={classes.BoxImage}>
      <img
        src={pathToAssets(`./images/formaciones/${image}`)}
        alt={title}
        className="img-fluid"
      />
    </div>
    <h6>{formacion}</h6>
    <h3>{title}</h3>
    <p>{date}</p>
  </div>
);

export default FormacionItem;
