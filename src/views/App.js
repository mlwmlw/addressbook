import React, {Component} from 'react';
import AddressBookApp from './AddressBookApp';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import store from '../store'

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
