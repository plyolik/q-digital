if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src/js/App'
import { name as appName } from './app.json';
import React from 'react';
import store from './src/js/redux/index'
import { Provider } from 'react-redux';
import player from './src/js/player-service';

const application = () => ((
  <Provider store={store}>
    <App />
  </Provider>
))

AppRegistry.registerComponent(appName, () => application)

TrackPlayer.registerPlaybackService(() => player);