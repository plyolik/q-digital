import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/pages/Home';
import Slider from './js/pages/Slider';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/slider" component={Slider}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
