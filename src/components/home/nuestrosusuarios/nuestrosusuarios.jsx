import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import classes from './nuestrosusuarios.module.scss';

import Wrapper from '../../UI/wrapper/wrapper';

import { fetchFormacion } from '../../../redux/actions/FormacionAction';

class NuestrosUsuarios extends Component {
  componentDidMount = () => {
    this.props.fetchFormacion();
  };

  render() {
    return (
      <div className={classes.NuestrosUsuarios}>
        <Wrapper title="Nuestros Usuarios" bgColor="1">
          <p>
            Anim Lorem quis commodo fugiat anim ullamco eiusmod cupidatat
            excepteur sunt. Veniam veniam sunt ut elit anim aute sunt magna duis
            laborum. Aliqua ex non ad dolore ad. Nulla dolore fugiat magna
            voluptate. Dolor amet voluptate deserunt voluptate enim id esse
            cillum eu ullamco. Labore anim deserunt pariatur eu officia ad
            officia id.
          </p>
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
)(NuestrosUsuarios);
