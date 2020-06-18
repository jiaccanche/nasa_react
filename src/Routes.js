import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeroBanner from './views/HeroBanner'

const Routes = () => {
  return(
    <Switch>
      <Route path="/home" component= {HeroBanner} />
      <Redirect from="*" to="/home"/>
    </Switch>
  );
}

export default Routes;