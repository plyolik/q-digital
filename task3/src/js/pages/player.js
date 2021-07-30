import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from '../../scss/components/player.scss'
import TrackPlayer, { State } from 'react-native-track-player';
import { connect } from 'react-redux';
import { addSounds } from '../redux/actions-sounds';
import { ApiSounds } from '../Api-sounds';


TrackPlayer.setupPlayer()

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localSounds: [require('../../sounds/0.mp3'), require('../../sounds/1.mp3'), require('../../sounds/2.mp3')]
    }
  }

  loadSoundsServer = () => {
    ApiSounds.getSounds().then(arr => this.props.addSounds(arr))
  }

  start = async () => {

    const newLocalSounds = this.state.localSounds.map((sound, i) => {
      return {
        url: sound,
        title: 'TrackLocal ' + i
      }
    })

    const newServerSounds = this.props.sounds.map((sound, i) => {
      return {
        url: sound,
        title: 'TrackServer ' + i
      }
    }) 

    const sounndAll = newLocalSounds.concat(newServerSounds)

    await TrackPlayer.setupPlayer({})
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      // compactCapabilities: [CAPABILITY_PLAY, CAPABILITY_PAUSE]
    });

    await TrackPlayer.add(sounndAll);
    // await TrackPlayer.play();
    // await TrackPlayer.pause();
    // await TrackPlayer.play();
  }

  componentDidMount = async () => {
    if (this.props.sounds.length <= 0) {
      this.loadSoundsServer()
    }
    await this.start()
  }

  render = () => {
    const sounds = this.state.isRemote ? this.props.sounds : this.state.localSounds
    const patchImage = sounds[this.state.soundsIndex]
    const img = this.state.isRemote ? { uri: patchImage } : patchImage
    return (
      <View className={styles.slider}>
        <View>
        <TouchableWithoutFeedback onPress={() => TrackPlayer.play()}>
            <Text>play</Text>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback onPress={() => TrackPlayer.pause()}>
            <Text>pause</Text>
          </TouchableWithoutFeedback>
        </View>
        <View className={styles.btnContainer}>
          <TouchableOpacity onPress={async () => TrackPlayer.skipToPrevious()}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={async () => TrackPlayer.skipToNext()}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

const mapStateToProps = store => ({ sounds: store.sounds })

export default connect(mapStateToProps, { addSounds })(Player)


