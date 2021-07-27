import React from 'react';
import { connect } from 'react-redux';
import { Api } from '../Api';
import { addImages } from '../redux/actions';

class Slider extends React.Component {

  loadImages = () => {
    Api.getImages().then(arr => {
      this.props.addImages(arr)
    })
  }

  componentDidMount = () => {
    this.loadImages()
  }

  render = () => {
    return (
      <div>
        {this.props.images.map((img, i) => ((
          <img alt='img' key={i} src={img}></img>
        )))}
      </div>
    )
  }
}

const mapStateToProps = store => ({ images: store.images })

export default connect(mapStateToProps, { addImages })(Slider)