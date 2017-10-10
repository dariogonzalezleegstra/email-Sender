import materializeCss from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './component/App';
import reducers from './reducers';

// I have to put the following code if I want to use axios from the console
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


//(Element to render, Where'll be render). #root is an id of a container in public/index.html
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root'));
