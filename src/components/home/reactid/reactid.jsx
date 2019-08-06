import React, { useState } from 'react';
import classes from './reactid.module.scss';

import BoxReactid from './boxreactid';
import Arrows from '../../UI/arrows/arrows';

const Reactid = () => {
  const [isCounter, setCounter] = useState(null);

  return (
    <div className={classes.Reactid}>
      <div className="container">
        <div className="d-none d-md-block">
          <div className={classes.Box_sm}>
            <BoxReactid title="Cursos" number="200" />
            <BoxReactid title="Diplomados" number="120" />
            <BoxReactid title="Seminarios y conferencias" number="60" />
            <BoxReactid title="Vendedores" number="520" />
            <BoxReactid title="Ganadores" number="340" />
          </div>
        </div>
        <div className="d-sm-block d-md-none">
          <Arrows select="r" />
          <Arrows select="l" />
          <div className={classes.Box_md}>
            <BoxReactid title="Cursos" number="200" />
            <BoxReactid title="Diplomados" number="120" />
            <BoxReactid title="Seminarios y conferencias" number="60" />
            <BoxReactid title="Vendedores" number="520" />
            <BoxReactid title="Ganadores" number="340" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactid;
