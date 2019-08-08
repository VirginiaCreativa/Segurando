import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import classes from './sidebar.module.scss';

function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SidebarCategoriaItem = ({ formaciones }) => {
  const materia = formaciones.map(item => item.categoria);
  const categorias = [...new Set(materia)].sort();

  return (
    <div className={classes.SidebarCategoriaItem}>
      <h4>Categorías</h4>
      <ul className="list-unstyled">
        {categorias.map(item => (
          <li key={item}>
            <Link to="/formacion">{CapitalizeFirstLetter(item)}</Link>
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
