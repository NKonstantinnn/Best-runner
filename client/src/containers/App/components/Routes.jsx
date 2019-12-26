import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AuthContainer from '../../AuthContainer';
import JournalContainer from '../../JournalContainer';
import ChartsContainer from '../../ChartsContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={JournalContainer} />
    <Route path="/charts" component={ChartsContainer} />
    <Route path="/signup" render={props => <AuthContainer {...props} isSignUp />} />
    <Route path="/signin" render={props => <AuthContainer {...props} isSignUp={false} />} />
  </Switch>
);

export default hot(module)(Routes);
