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
      isLocal: true
    }
  }

  importAll(r) {
    console.log(r.keys())
    return r.keys().map(item => r(item).default)
  }

  loadImagesLocal = () => {
    const images = this.importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/))
    this.setState({
      images: images,
      imgIndex: 0,
      isLocal: false
    })
  }

  loadImagesServer = () => {
    Api.getImages().then(arr => {
      this.props.addImages(arr)
      this.setState({
        images: this.props.images,
        imgIndex: 0,
        isLocal: true
      })
    })
  }

  handleSwitchLoadingPlace = (e) => {
    this.state.isLocal ? this.loadImagesLocal() : this.loadImagesServer()
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
        <button onClick={this.handleSwitchLoadingPlace} className="btn">  Switch to {this.state.isLocal ? 'remote' : 'local'}</button>
        <Link to="/main">
          <button className="btn"> Back to main</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => ({ images: store.images })

export default connect(mapStateToProps, { addImages })(Slider)