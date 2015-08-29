import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';
const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(reducers);
export default finalCreateStore(reducer);