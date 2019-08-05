import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const logo = ({ selectLogo }) => (
  <div>{selectLogo === 1 ? <h4>Logo Black</h4> : <h4>Logo White</h4>}</div>
);

export default compose(
  connect(state => ({
    selectLogo: state.Global.selectLogo,
  }))
)(logo);
