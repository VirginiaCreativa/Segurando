import React from 'react';
import classes from './wrapper.module.scss';

const Wrapper = ({ children, title, bgColor }) => {
  const classWrapper = {
    backgroundColor: `${bgColor === '1' ? '#f0f4f7' : ''}`,
  };
  return (
    <div className={classes.Wrapper} style={classWrapper}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
