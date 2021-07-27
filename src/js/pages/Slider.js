import React from 'react';
import { connect } from 'react-redux';
import { Api } from '../Api';
import { addImages } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../../scss/components/slider.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgIndex: 0,
      images: [],
      isRemote: true,
      localImages: ['/0.jpg', '/1.jpg', '/2.jpg']
    }
  }

  loadImagesServer = () => {
    Api.getImages().then(arr => {
      this.props.addImages(arr)
      this.setState({
        images: this.props.images,
        imgIndex: 0,
        isRemote: true
      })
    })
  }

  handleSwitchLoadingPlace = (e) => {
    const isRemote = !this.state.isRemote
    const currentImages = isRemote ? this.props.images : this.state.localImages
    this.setState({isRemote: !isRemote, images: currentImages})
  }

  handleToLeftClick = (e) => {
    let i = this.state.imgIndex
    i = i - 1
    if (i < 0) {
      i = this.state.images.length - 1
    }
    this.setState({ imgIndex: i })
  }

  handleToRightClick = (e) => {
    let i = this.state.imgIndex
    i = i + 1
    if (i >= this.state.images.length) {
      i = 0
    }
    this.setState({ imgIndex: i })
  }

  componentDidMount = () => {
    this.loadImagesServer()
  }

  render = () => {
    return (
      <div className="slider_block">
        <div className="slider">
          <button onClick={this.handleToLeftClick} className="btn-switch"> Left </button>
          <div className="slider_img">
            <img className="img" alt='img' src={this.state.images[this.state.imgIndex]}></img>
          </div>
          <button onClick={this.handleToRightClick} className="btn-switch"> Right </button>
        </div>
        <button onClick={this.handleSwitchLoadingPlace} className="btn">  Switch to {this.state.isRemote ?  'local' : 'remote' }</button>
        <Link to="/main">
          <button className="btn"> Back to main</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => ({ images: store.images })

export default connect(mapStateToProps, { addImages })(Slider)