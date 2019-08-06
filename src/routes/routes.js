import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../components/UI/spinner/spinner';

const Home = lazy(() => import('../containers/home'));
const Formacion = lazy(() => import('../containers/formacion'));

const Routers = () => (
  <>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/formacion" component={Formacion} />
      </Switch>
    </Suspense>
  </>
);

export default Routers;
