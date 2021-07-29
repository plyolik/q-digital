import { AppRegistry } from 'react-native';
import App from './src/js/App'
import { name as appName } from './app.json';
import React from 'react';
import store from './src/js/redux/index'
import { Provider } from 'react-redux';

const application = () => ((
  <Provider store={store}>
    <App />
  </Provider>
))

AppRegistry.registerComponent(appName, () => application)
