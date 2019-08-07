import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nuestrosusuarios.module.scss';

const pathToAssets = require.context('../../../assets', true);

const NuestrosUsuariosItem = ({
  image,
  name,
  company,
  job,
  city,
  formaciones,
}) => (
  <div className={classes.NuestrosUsuariosItem}>
    <div className={classes.BoxImage}>
      <img src="" alt={`${company}, ${job}, ${name}`} className="img-fluid" />
    </div>
    <div className={classes.BoxContent}>
      <h1>{name}</h1>
      <p className={classes.TextCompany}>
        {company}, {city}
      </p>
      <p className={classes.TextJob}>{job}</p>
    </div>
    <div className={classes.BoxFormacion}>
      <ul>
        {formaciones.map(item => (
          <li key={item}>
            <Link to="/formacion">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default NuestrosUsuariosItem;
