import React from 'react';
import { connect } from 'react-redux';
import { Api } from '../Api';
import {addImage} from '../redux/actions';
import {getImagesState} from '../redux/selectors';

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  loadImages = () => {
    Api.getImages().then(arr => {
      arr.forEach(img => {
        if (this.props.images.indexOf(img) === -1)
          this.props.addImage(img)
      })
    })
  }

  componentDidMount = () => {
    this.loadImages()
  }

  render = () => {
    return (
      <div>
        {this.props.images.map((img, i) => ((
          <img key={i} src={img}></img>
        )))}
      </div>
    )
  }
}

export default connect(getImagesState, { addImage })(Slider)

