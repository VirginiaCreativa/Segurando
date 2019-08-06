import React from 'react';
import classes from './reactid.module.scss';

import BoxReactid from './boxreactid';

const Reactid = () => (
  <div className={classes.Reactid}>
    <div className="container">
      <BoxReactid title="Cursos" number="200" />
    </div>
  </div>
);

export default Reactid;
