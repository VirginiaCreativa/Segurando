import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import classes from './sidebar.module.scss';

const SidebarFormacionItem = ({ formaciones }) => (
  <div className={classes.SidebarFormacionItem}>
    <ul>
      {formaciones.map(item => (
        <li key={item.id}>
          <Link to="/formacion">{item.formacion}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default compose(
  connect(state => ({
    formaciones: state.Formacion.formaciones,
    loading: state.Formacion.loading,
    error: state.Formacion.error,
  }))
)(SidebarFormacionItem);
