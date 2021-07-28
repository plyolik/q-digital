import React from 'react';
import { Link } from "react-router-native";
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../scss/components/main.scss'

export default class Main extends React.Component {
  render() {
    return (
      <View className={styles.main}>
        <Text>Hello!</Text>
        <Link component={TouchableOpacity} className={styles.btnMain} to="/slider">
          <Text>Slider</Text>
        </Link>
      </View>
    )
  }
}
