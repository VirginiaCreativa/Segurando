import React, { Component } from 'react';
import classes from './formacion.module.scss';

import Wrapper from '../../UI/wrapper/wrapper';
import Filter from './formacion_btnFilters';

class Formacion extends Component {
  state = {
    canActiveAll: false,
    canActiveVida: false,
  };

  componentDidUpdate(prevProps, prevState) {}

  handleAll = () => {
    console.log('Todas');
    const { canActiveAll } = this.state;
    this.setState(prevState => ({ canActiveAll: !prevState.canActiveAll }));
  };

  handleVida = () => {
    console.log('Vida');
    const { canActiveVida } = this.state;
    this.setState(prevState => ({ canActiveVida: !prevState.canActiveVida }));
  };

  render() {
    const { canActiveAll, canActiveVida } = this.state;

    const classActiveAll = canActiveAll === true ? 'SuccesActiv' : null;
    const classActiveVida = canActiveVida === true ? 'SuccesActiv' : null;

    return (
      <div className={classes.Formacion}>
        <Wrapper title="Formación" bgColor="2">
          <div className="col">
            <div className={classes.BoxFilters}>
              <Filter
                onClick={this.handleAll}
                text="Todas"
                active={classActiveAll}
              />
              <Filter
                onClick={this.handleVida}
                text="Vida y Social"
                active={classActiveVida}
              />
              <Filter onClick={this.handleSalud} text="Salud" />
              <Filter onClick={this.handleVivienda} text="Vivienda" />
              <Filter onClick={this.handleARL} text="ARL" />
              <Filter onClick={this.handleFuturo} text="Futuro" />
              <Filter onClick={this.handleMovilidad} text="Movilidad" />
              <Filter onClick={this.handleFinancias} text="Financias" />
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Formacion;
