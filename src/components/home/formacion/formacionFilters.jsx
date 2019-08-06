import React from 'react';
import classes from './formacion.module.scss';

const Filters = ({ onClick, text, active }) => (
  <>
    <button
      className={['btn btn-success', active].join(' ')}
      type="button"
      onClick={onClick}>
      {text}
    </button>
  </>
);

export default Filters;
