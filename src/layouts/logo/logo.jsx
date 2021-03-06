import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import BlackLogo from '../../assets/logo/19_01_UX_SG_Logo_Black_V1.svg';
import WhiteLogo from '../../assets/logo/19_01_UX_SG_Logo_White_V1.svg';
import classes from './logo.module.scss';

const logo = ({ selectsColor }) => (
  <>
    <Link to="/">
      {selectsColor === 1 ? (
        <img src={BlackLogo} alt="Logo Segurando" className={classes.Logo} />
      ) : (
        <img src={WhiteLogo} alt="Logo Segurando" className={classes.Logo} />
      )}
    </Link>
  </>
);

export default compose(
  connect(state => ({
    selectsColor: state.Global.selectsColor,
  }))
)(logo);
