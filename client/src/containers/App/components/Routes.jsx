import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleContainer from '../../ExampleContrainer';
import AuthContainer from '../../AuthContainer';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ExampleContainer} />
    <Route path="/1" component={ExampleContainer} />
    <PrivateRoute path="/private" component={ExampleContainer} />
    <Route path="/signup" render={props => <AuthContainer {...props} isSignUp />} />
    <Route path="/signin" render={props => <AuthContainer {...props} isSignUp={false} />} />
  </Switch>
);

export default hot(module)(Routes);
