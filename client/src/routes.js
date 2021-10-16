import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Background from './pages/Background';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Background} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
};