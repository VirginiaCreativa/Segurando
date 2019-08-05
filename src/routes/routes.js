import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import Formacion from '../containers/formacion';

const Routers = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/formacion" component={Formacion} />
    </Switch>
  </>
);

export default Routers;
