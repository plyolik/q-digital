import React from 'react';
import { View } from 'react-native';
import { Route, Router } from "react-router-native";
import Main from './main';
import Player from './player';
import Slider from './slider';
import Tabs from './tabs';
import styles from '../../scss/components/routes.scss'


class Routes extends React.Component {
  render() {
    return (
      <View className={styles.routesContainer}>
        <Route path="/slider" component={Slider} />
        <Route path="/player" component={Player}/>
        <Route exact path="/" component={Main} />
        <View className={styles.tabsPosition}>
          <Tabs /> 
        </View>
      </View>
    );
  }
}

export default Routes