import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss'
import App from './js/App';
import store from './js/redux/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);