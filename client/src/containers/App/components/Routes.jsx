import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleContainer from '../../ExampleContrainer';
import AuthContainer from '../../AuthContainer';
import JournalContainer from '../../JournalContainer';
import ChartsContainer from '../../ChartsContainer';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={JournalContainer} />
    <Route path="/charts" component={ChartsContainer} />
    <Route path="/1" component={ExampleContainer} />
    <PrivateRoute path="/private" component={ExampleContainer} />
    <Route path="/signup" render={props => <AuthContainer {...props} isSignUp />} />
    <Route path="/signin" render={props => <AuthContainer {...props} isSignUp={false} />} />
  </Switch>
);

export default hot(module)(Routes);
