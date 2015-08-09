import React from 'react';
import Home from './views/Home';
window.React = React; // enable debugger
const reactRoot = window.document.getElementById('wrapper');
React.render(<div>
	<Home />
	<footer />
</div>, reactRoot);
