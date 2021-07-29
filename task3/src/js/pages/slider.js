import React from 'react';
import { connect } from 'react-redux';
import { Api } from '../Api';
import { addImages } from '../redux/actions';
import { Link } from "react-router-native";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../scss/components/slider.scss'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgIndex: 0,
      isRemote: true,
      localImages: [require('../../img/0.jpg'), require('../../img/1.jpg'), require('../../img/2.jpg')]
    }
  }

  loadImagesServer = () => {
    Api.getImages().then(arr => this.props.addImages(arr))
  }

  handleSwitchLoadingPlace = (e) => {
    this.setState({ isRemote: !this.state.isRemote })
  }

  handleToLeftClick = (e) => {
    let i = this.state.imgIndex
    i = i - 1
    if (i < 0) {
      i = 3 - 1
    }
    this.setState({ imgIndex: i })
  }

  handleToRightClick = (e) => {
    let i = this.state.imgIndex
    i = i + 1
    if (i >= 3) {
      i = 0
    }
    this.setState({ imgIndex: i })
  }

  componentDidMount = () => {
    this.loadImagesServer()
  }

  render = () => {
    const images = this.state.isRemote ? this.props.images : this.state.localImages

    const patchImage = images[this.state.imgIndex]

    const img = this.state.isRemote ? { uri: patchImage } : patchImage

    return (
      <View className={styles.slider}>
        <View>
          <View className={styles["slider_img"]}>
            <Image alt='img' className={styles.img} source={img} />
          </View>
          <View className={styles.btnContainer}>
            <TouchableOpacity onPress={this.handleToLeftClick} className={styles.btnSwitch}>
              <Text>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleToRightClick} className={styles.btnSwitch}>
              <Text>
                Right
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={this.handleSwitchLoadingPlace} className={styles.btn} >
          <Text>Switch to {this.state.isRemote ? 'local' : 'remote'}</Text>
        </TouchableOpacity>
        {/* <Link component={TouchableOpacity} to="/" className={styles.btn}>
          <Text>
            Back to main
          </Text>
        </Link> */}
      </View>
    )
  }
}

const sty = StyleSheet.create({
  img: {
    width: '50%',
    height: 100
  }
})

const mapStateToProps = store => ({ images: store.images })

export default connect(mapStateToProps, { addImages })(Slider)