import { createStore, compose } from 'redux';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable */

export default (combinedReducer, middlewares) => createStore(
  combinedReducer,
  composeEnhancers.apply(this, middlewares),
);
