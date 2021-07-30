import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import TrackPlayer, { CAPABILITY_PAUSE, CAPABILITY_PLAY, CAPABILITY_SKIP_TO_NEXT, CAPABILITY_SKIP_TO_PREVIOUS, State, TrackPlayerEvents } from 'react-native-track-player';
import { connect } from 'react-redux';
import { addSounds } from '../redux/actions-sounds';
import { ApiSounds } from '../Api-sounds';

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localSounds: [require('../../sounds/0.mp3'), require('../../sounds/1.mp3'), require('../../sounds/2.mp3')],
      title: 'No track'
    }
  }

  loadSoundsServer = () => {
    ApiSounds.getSounds().then(arr => this.props.addSounds(arr)).then(() => this.start())
  }

  start = async () => {
    const newLocalSounds = this.state.localSounds.map((sound, i) => {
      return {
        id: i,
        url: sound,
        title: 'TrackLocal ' + (i + 1)
      }
    })
    const newServerSounds = this.props.sounds.map((sound, i) => {
      return {
        id: i + 3,
        url: sound,
        title: 'TrackServer ' + (i + 1)
      }
    })

    const sounndAll = newLocalSounds.concat(newServerSounds)

    await TrackPlayer.setupPlayer({})
    await TrackPlayer.updateOptions({
      capabilities: [
        CAPABILITY_SKIP_TO_PREVIOUS,
        CAPABILITY_PLAY,
        CAPABILITY_PAUSE,
        CAPABILITY_SKIP_TO_NEXT
      ],
      stopWithApp: true,
    });

    await TrackPlayer.add(sounndAll);

    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_NEXT, () => this.updateTrackInfo());
    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PREVIOUS, () => this.updateTrackInfo());
  }

  async updateTrackInfo() {
    const trackIndex = await TrackPlayer.getCurrentTrack()
    if (!trackIndex) return

    const track = await TrackPlayer.getTrack(trackIndex)
    if (!track) return

    this.setState({ title: track.title })
  }

  prevTrack = () => {
    TrackPlayer.skipToPrevious().catch(async () => {
      const length = (await TrackPlayer.getQueue()).length
      TrackPlayer.skip(`${length - 1}`)
    }).finally(() => this.updateTrackInfo())
  }

  nextTrack = () => {
    TrackPlayer.skipToNext().catch(() => TrackPlayer.skip('0')).finally(() => this.updateTrackInfo())
  }

  play = () => {
    TrackPlayer.play()
    this.updateTrackInfo()
  }

  componentDidMount = async () => {
    if (this.props.sounds.length <= 0) {
      this.loadSoundsServer()
    }
  }

  render = () => {
    return (
      <View style={style.player}>
        <View>
          <Text style={style.title}>{this.state.title}</Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={this.play}>
            <Text style={style.button}>play</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => TrackPlayer.pause()}>
            <Text style={style.button}>pause</Text>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableOpacity onPress={this.prevTrack}>
            <Text style={style.button}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextTrack}>
            <Text style={style.button}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  player: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    padding: 10
  },
  button: {
    width: 70,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "grey",
    margin: 10,
    textAlign: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = store => ({ sounds: store.sounds })

export default connect(mapStateToProps, { addSounds })(Player)