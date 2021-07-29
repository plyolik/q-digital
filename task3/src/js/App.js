import React from 'react';
import Routes from './pages/routes.js'
import { NativeRouter } from "react-router-native";
import { View } from 'react-native';

const App = () => {
  return (
    <NativeRouter>
      <View>
        <Routes />
      </View>
    </NativeRouter>
  );
};

export default App;
