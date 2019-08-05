import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import Formacion from '../containers/formacion';

const Routers = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/formacion" component={Formacion} />
    </Switch>
  </>
);

export default Routers;
