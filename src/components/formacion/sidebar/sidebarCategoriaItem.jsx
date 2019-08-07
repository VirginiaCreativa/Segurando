import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import classes from './sidebar.module.scss';

const SidebarCategoriaItem = ({ formaciones }) => {
  const materia = formaciones.map(item => item.categoria);
  const categorias = [...new Set(materia)].sort();

  return (
    <div className={classes.SidebarCategoriaItem}>
      <ul>
        {categorias.map(item => (
          <li key={item.id}>
            <Link to="/formacion">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default compose(
  connect(state => ({
    formaciones: state.Formacion.formaciones,
    loading: state.Formacion.loading,
    error: state.Formacion.error,
  }))
)(SidebarCategoriaItem);
