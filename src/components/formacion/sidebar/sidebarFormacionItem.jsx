import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import classes from './sidebar.module.scss';

function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SidebarFormacionItem = ({ formaciones }) => {
  const materia = formaciones.map(item => item.formacion);
  const formacion = [...new Set(materia)].sort();
  return (
    <div className={classes.SidebarFormacionItem}>
      <h4>Formación</h4>
      <ul className="list-unstyled">
        {formacion.map(item => (
          <li key={item.id}>
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
)(SidebarFormacionItem);
