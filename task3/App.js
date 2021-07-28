import React from 'react';
import Routes from './src/js/pages/routes.js'
import { NativeRouter } from "react-router-native";



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  return (
    <NativeRouter>
      <View>
        <Routes/>
      </View>
    </NativeRouter>
  );
};

export default App;
