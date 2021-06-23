import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Banner from '../views/Banner'

const Routes = () => {
  return(
    <Switch>
      <Route path="/home" component= {Banner} />
      <Redirect from="*" to="/home"/>
    </Switch>
  );
}

export default Routes;