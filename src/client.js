import React from 'react';
import { Provider } from 'react-redux';
import App from './views/App';
window.React = React; // enable debugger
import configureStore from './store/configureStore';

const store = configureStore();


const reactRoot = window.document.getElementById('wrapper');

React.render(
<Provider>
	{() => <App store={store} />}
</Provider>, reactRoot);
