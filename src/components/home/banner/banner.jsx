import React from 'react';
import classes from './banner.module.scss';
import Reactid from '../reactid/reactid';

const banner = () => (
  <div className={classes.Banner}>
    <div className={classes.bgOverly}>
      <div className="container">
        <div className={classes.Content}>
          <div className={classes.LineGreen} />
          <div className={classes.Heading}>
            <h2>OFRECE CURSOS PARA</h2>
            <h1>VENDEDORES ESTRELLAS,</h1>
            <h1>SE CAPACITAN Y MEJORES VENDENDORES</h1>
          </div>
          <div className={classes.Parrag}>
            <p>
              Los vendedores puede escoger entre varios curso. Quieres saberlo
              más.
            </p>
          </div>
          <button type="button" className="btn btn-primary">
            contáctamos!
          </button>
        </div>
      </div>
    </div>
    <Reactid />
  </div>
);

export default banner;
