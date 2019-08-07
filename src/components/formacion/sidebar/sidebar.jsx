import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classes from './sidebar.module.scss';

import FormacionesItems from './sidebarFormacionItem';
import CategoriasItems from './sidebarCategoriaItem';

class Sidebar extends Component {
  render() {
    const { error, loading, formaciones } = this.props;
    return (
      <div className={classes.Sidebar}>
        <FormacionesItems />
        <CategoriasItems />
      </div>
    );
  }
}

export default compose(
  connect(state => ({
    formaciones: state.Formacion.formaciones,
    loading: state.Formacion.loading,
    error: state.Formacion.error,
  }))
)(Sidebar);
