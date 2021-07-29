import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../scss/components/main.scss'

export default class Main extends React.Component {
  render() {
    return (
      <View className={styles.main}>
        <Text>Hello!</Text>
      </View>
    )
  }
}
