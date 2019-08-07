import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { history } from '../../../redux/store/store';
import classes from './formacion.module.scss';

import { fetchFormacion } from '../../../redux/actions/FormacionAction';

import Wrapper from '../../UI/wrapper/wrapper';
import Spinner from '../../UI/spinner/spinner';
import Filter from './formacionFilters';

const ItemFormacion = lazy(() => import('./formacionItem'));

class Formacion extends Component {
  state = {
    canActiveAll: false,
    canActiveVida: false,
    canActiveSalud: false,
    canActiveARL: false,
    canActiveFuturo: false,
    canActiveMovilidad: false,
    canActiveFinancias: false,
    canActiveVivienda: false,
  };

  componentDidMount = () => {
    this.props.fetchFormacion();
  };

  handleAll = () => {
    console.log('Todas');
    const { canActiveAll } = this.state;
    this.setState(prevState => ({
      canActiveAll: !prevState.canActiveAll,
      canActiveVida: false,
      canActiveSalud: false,
      canActiveARL: false,
      canActiveFuturo: false,
      canActiveMovilidad: false,
      canActiveFinancias: false,
      canActiveVivienda: false,
    }));
  };

  handleVida = () => {
    console.log('Vida y Social');
    const { canActiveVida, canActiveAll } = this.state;
    this.setState(prevState => ({
      canActiveVida: !prevState.canActiveVida,
      canActiveAll: false,
    }));
  };

  handleSalud = () => {
    console.log('Salud');
    const { canActiveSalud } = this.state;
    this.setState(prevState => ({
      canActiveSalud: !prevState.canActiveSalud,
      canActiveAll: false,
    }));
  };

  handleARL = () => {
    console.log('ARL');
    const { canActiveARL } = this.state;
    this.setState(prevState => ({
      canActiveARL: !prevState.canActiveARL,
      canActiveAll: false,
    }));
  };

  handleFuturo = () => {
    console.log('Futuro');
    const { canActiveFuturo } = this.state;
    this.setState(prevState => ({
      canActiveFuturo: !prevState.canActiveFuturo,
      canActiveAll: false,
    }));
  };

  handleMovilidad = () => {
    console.log('Movilidad');
    const { canActiveMovilidad } = this.state;
    this.setState(prevState => ({
      canActiveMovilidad: !prevState.canActiveMovilidad,
      canActiveAll: false,
    }));
  };

  handleFinancias = () => {
    console.log('Financias');
    const { canActiveFinancias } = this.state;
    this.setState(prevState => ({
      canActiveFinancias: !prevState.canActiveFinancias,
      canActiveAll: false,
    }));
  };

  handleVivienda = () => {
    console.log('Vivienda');
    const { canActiveVivienda } = this.state;
    this.setState(prevState => ({
      canActiveVivienda: !prevState.canActiveVivienda,
      canActiveAll: false,
    }));
  };

  render() {
    const { error, loading, formaciones } = this.props;
    const {
      canActiveAll,
      canActiveVida,
      canActiveSalud,
      canActiveARL,
      canActiveFuturo,
      canActiveMovilidad,
      canActiveFinancias,
      canActiveVivienda,
    } = this.state;

    const classActiveAll = canActiveAll === true ? 'SuccesActiv' : null;
    const classActiveVida = canActiveVida === true ? 'SuccesActiv' : null;
    const classActiveSalud = canActiveSalud === true ? 'SuccesActiv' : null;
    const classActieVivienda =
      canActiveVivienda === true ? 'SuccesActiv' : null;
    const classActiveARL = canActiveARL === true ? 'SuccesActiv' : null;
    const classActiveFuturo = canActiveFuturo === true ? 'SuccesActiv' : null;
    const classActiveMovilidad =
      canActiveMovilidad === true ? 'SuccesActiv' : null;
    const classActiveFinancias =
      canActiveFinancias === true ? 'SuccesActiv' : null;

    return (
      <div className={classes.Formacion}>
        <Wrapper title="Formación" bgColor="2">
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
            <Filter
              onClick={this.handleSalud}
              text="Salud"
              active={classActiveSalud}
            />
            <Filter
              onClick={this.handleVivienda}
              text="Vivienda"
              active={classActieVivienda}
            />
            <Filter
              onClick={this.handleARL}
              text="ARL"
              active={classActiveARL}
            />
            <Filter
              onClick={this.handleFuturo}
              text="Futuro"
              active={classActiveFuturo}
            />
            <Filter
              onClick={this.handleMovilidad}
              text="Movilidad"
              active={classActiveMovilidad}
            />
            <Filter
              onClick={this.handleFinancias}
              text="Financias"
              active={classActiveFinancias}
            />
          </div>

          <>
            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
            ) : (
              <div className={classes.BoxGrid}>
                {formaciones.map(item => (
                  <ItemFormacion key={item.id} {...item} />
                ))}
              </div>
            )}
          </>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push('/formacion')}>
            Más formaciones
          </button>
        </Wrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchFormacion }, dispatch);

export default compose(
  connect(
    state => ({
      formaciones: state.Formacion.formaciones,
      loading: state.Formacion.loading,
      error: state.Formacion.error,
    }),
    mapDispatchToProps
  )
)(Formacion);
