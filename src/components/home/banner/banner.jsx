import React from 'react';
import classes from './banner.module.scss';

const banner = () => (
  <div className={classes.Banner}>
    <div className={classes.bgOverly}>
      <div className={classes.Content}>
        <div className="container">
          <h3>Titulo</h3>
        </div>
      </div>
    </div>
  </div>
);

export default banner;
