import React from 'react';
import { Provider } from 'react-redux';
import App from './views/App';
window.React = React; // enable debugger



const reactRoot = window.document.getElementById('wrapper');

React.render(
<App />, reactRoot);
