import React from 'react';
import classes from './header.module.scss';

import Logo from '../logo/logo';

const header = () => (
  <>
    <header>
      <div className="row">
        <div className="col-sm-6">
          <Logo />
        </div>
      </div>
    </header>
  </>
);

export default header;
