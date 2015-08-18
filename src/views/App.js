import React, {Component} from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AddressBookApp from './AddressBookApp';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';
const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <AddressBookApp />}
        </Provider>
        
        <DebugPanel top right bottom>
          <DevTools store={store}
                  monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
