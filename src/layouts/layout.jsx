import React from 'react';
import classes from './layout.module.scss';

import Top from './top/top';
import Header from './header/header';
import Footer from './footer/footer';

const layout = ({ children }) => (
  <div className={classes.Layout}>
    <Top />
    <Header />
    {children}
    <Footer />
  </div>
);

export default layout;
