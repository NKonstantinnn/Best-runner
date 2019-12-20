import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './Redux/configureStore';
import Routes from './components/Routes';
import Main from './components/Main';
import MainModal from '../../shared/modal/MainModal';

import GlobalStyles from './styled/GlobalStyles';

const store = configureStore();

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Routes />
          <MainModal />
        </Main>
      </BrowserRouter>
    </Provider>
  </div>
);

export default hot(module)(App);

