import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Earlybird from './Pages/Sub/Earlybird';
import Event from './Pages/Sub/Event';
import NotFound from './Pages/NotFound';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route  exact path='/' component={Main} />
        <Route  exact path='/earlybird' component={Earlybird} />
        <Route  exact path='/event' component={Event} />
        <Route  path='/' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}