import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <p className="hello">Hello!</p>
        <Link to="/slider">
          <button className="button">Slider</button>
        </Link>
      </div>
    )
  }
}