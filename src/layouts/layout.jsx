import React from 'react';

import Top from './top/top';

const layout = ({ children }) => (
  <>
    <Top />
    {children}
  </>
);

export default layout;
