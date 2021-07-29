import React from 'react';
import { Text, View, TouchableOpacity, BackHandler, Linking } from 'react-native';
import styles from '../../scss/components/tabs.scss'
import { Link } from "react-router-native";

export default class Tabs extends React.Component {
  render() {
    return (
      <View className={styles.tabsContainer}>
        <Link component={TouchableOpacity} to="/">
          <Text>
            Main
          </Text>
        </Link>
        <Link component={TouchableOpacity} to="/slider">
          <Text>
            Slider
          </Text>
        </Link>
        <Link component={TouchableOpacity} to="/player">
          <Text>
            Player
          </Text>
        </Link>
        <TouchableOpacity onPress={() => { Linking.openURL('https://q-digital.org') }}>
          <Text>Browser</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => BackHandler.exitApp()} >
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
