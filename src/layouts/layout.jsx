import React from 'react';

import Top from './top/top';
import Header from './header/header';

const layout = ({ children }) => (
  <>
    <Top />
    <Header />
    {children}
  </>
);

export default layout;
