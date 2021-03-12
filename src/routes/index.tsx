import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EventPage from '../pages/events/[id]';
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
      <Route exact path="/events/:id">
        <EventPage />
      </Route>
    </Switch>
  );
};

export default Routes;
