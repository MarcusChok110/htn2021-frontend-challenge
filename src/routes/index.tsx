import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
