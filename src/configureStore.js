import { createStore } from 'redux';

import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const store = createStore(
    createReducer(),
  );

  store.injectedReducers = {};

  return store;
}
