import React from 'react';
import { Text, View} from 'react-native';
import styles from '../../scss/components/player.scss'

export default class Player extends React.Component {
  render() {
    return (
      <View className={styles.playerContainer}>
        <Text>Скоро будет плеер</Text>
      </View>
    )
  }
}
