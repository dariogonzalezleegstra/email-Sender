import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';

//(Element to render, Where'll be render). #root is an id of a container in public/index.html
ReactDOM.render(<App />, document.querySelector('#root'));
