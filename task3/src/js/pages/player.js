import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../scss/components/player.scss'
import TrackPlayer from 'react-native-track-player';
import { connect } from 'react-redux';
import { addSounds } from '../redux/actions-sounds';

TrackPlayer.setupPlayer()

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      id: 'trackId',
      url: require('../../sounds/0.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',
    } 
  }

  start = async () => {
    await TrackPlayer.setupPlayer()
    await TrackPlayer.add({
      id: this.state.id,
      url: this.state.url,
      title: this.state.title,
      artist: this.state.artist,
    });

    await TrackPlayer.play();
  }

  render = () => {
    return (
      <View>
        <TouchableOpacity onPress={this.start}>
          <Text>Left</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = store => ({ sounds: store.sounds})

export default connect(mapStateToProps, { addSounds})(Player)
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     soundsIndex: 0,
  //     isRemote: true
  //     // localSounds: [require('../../img/0.jpg'), require('../../img/1.jpg'), require('../../img/2.jpg')]
  //   }
  // }

  // loadImagesServer = () => {
  //   Api.getImages().then(arr => this.props.addImages(arr))
  // }

  // handleSwitchLoadingPlace = (e) => {
  //   this.setState({ isRemote: !this.state.isRemote })
  // }

  // handleToLeftClick = (e) => {
  //   let i = this.state.imgIndex
  //   i = i - 1
  //   if (i < 0) {
  //     i = 3 - 1
  //   }
  //   this.setState({ imgIndex: i })
  // }

  // handleToRightClick = (e) => {
  //   let i = this.state.imgIndex
  //   i = i + 1
  //   if (i >= 3) {
  //     i = 0
  //   }
  //   this.setState({ imgIndex: i })
  // }

  // componentDidMount = () => {
  //   this.loadImagesServer()
  // }

//   render = () => {
//     // const images = this.state.isRemote ? this.props.images : this.state.localImages
//     // const patchImage = images[this.state.imgIndex]
//     // const img = this.state.isRemote ? { uri: patchImage } : patchImage
    
//     return (
//       <View className={styles.slider}>
//         <View>
//           <View className={styles["slider_img"]}>
//             <Image alt='img' className={styles.img} source={img} />
//           </View>
//           <View className={styles.btnContainer}>
//             <TouchableOpacity onPress={this.handleToLeftClick} className={styles.btnSwitch}>
//               <Text>Left</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={this.handleToRightClick} className={styles.btnSwitch}>
//               <Text>
//                 Right
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity onPress={this.handleSwitchLoadingPlace} className={styles.btn} >
//           <Text>Switch to {this.state.isRemote ? 'local' : 'remote'}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

