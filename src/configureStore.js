import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';

import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const middlewares = [routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers),
  );

  store.injectedReducers = {};

  return store;
}