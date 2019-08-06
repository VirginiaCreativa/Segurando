import React, { Component } from 'react';
import classes from './formacion.module.scss';

import Wrapper from '../../UI/wrapper/wrapper';

class Formacion extends Component {
  render() {
    return (
      <div className={classes.Formacion}>
        <Wrapper title="Formación" bgColor="2" />
      </div>
    );
  }
}

export default Formacion;
