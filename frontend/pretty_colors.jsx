//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

//testing
import * as Utils from './util/colors_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    window.dispatch = store.dispatch;
    window.Utils = Utils;
});

