import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classes from './sidebar.module.scss';

function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SidebarMobile = ({ formaciones }) => {
  const materia = formaciones.map(item => item.formacion);
  const formacion = [...new Set(materia)].sort();
  const categorias = formaciones.map(item => item.categoria);
  const categoria = [...new Set(categorias)].sort();

  return (
    <div className={classes.SidebarMobile}>
      <div className={classes.BoxForm}>
        <div className={classes.SelectArrow}>
          <i className="bx bx-chevron-down" />
        </div>
        <form>
          <select name="cars">
            <option value="" selected>
              Selección Formación
            </option>
            {formacion.map(item => (
              <option key={item.key} value={item.key}>
                {CapitalizeFirstLetter(item)}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className={classes.BoxForm}>
        <div className={classes.SelectArrow}>
          <i className="bx bx-chevron-down" />
        </div>
        <form>
          <select name="cars">
            <option value="" selected>
              Selección Caterogias
            </option>
            {categoria.map(item => (
              <option key={item.key} value={item.key}>
                {CapitalizeFirstLetter(item)}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default compose(
  connect(state => ({
    formaciones: state.Formacion.formaciones,
    loading: state.Formacion.loading,
    error: state.Formacion.error,
  }))
)(SidebarMobile);
