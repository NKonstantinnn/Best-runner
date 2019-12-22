import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Alert from 'react-s-alert';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

import configureStore from './Redux/configureStore';
import Routes from './components/Routes';
import Main from './containers/Main';
import MainModal from '../../shared/modal/MainModal';

import GlobalStyles from './styled/GlobalStyles';

const store = configureStore();

const App = () => (
  <div className="app">
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Routes />
          <MainModal />
          <Alert
            stack={{ limit: 5 }}
            effect="bouncyflip"
            position="top-right"
            timeout={10000}
            offset={80}
          />
        </Main>
      </BrowserRouter>
    </Provider>
  </div>
);

export default hot(module)(App);

