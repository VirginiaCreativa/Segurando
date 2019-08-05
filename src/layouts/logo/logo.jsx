import React, { useState } from 'react';

const logo = ({ type }) => (
  <div>{type === '2' ? <h4>Logo White</h4> : <h4>Logo Black</h4>}</div>
);

export default logo;
