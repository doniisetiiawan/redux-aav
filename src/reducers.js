import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from './utils/history';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    ...injectedReducers,
    router: connectRouter(history),
  });
}
