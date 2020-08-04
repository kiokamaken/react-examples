import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CubeGame from 'containers/CubeGame/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export const Routes = () => (
  <Switch>
    <Route exact path="/cube" component={CubeGame} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);
