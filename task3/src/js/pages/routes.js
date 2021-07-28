import React from 'react';
import { View } from 'react-native';
import { Route } from "react-router-native";
import Main from './main';
import Slider from './slider';


class Routes extends React.Component {
  render() {
    return (
      <View>
        <Route path="/slider" component={Slider} />
        <Route exact path="/" component={Main} />
      </View>
    );
  }
}

export default Routes