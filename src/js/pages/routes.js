import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main';
import Slider from './slider';


class Routes extends React.Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/slider" component={Slider}>
              </Route>
              <Route path="/" component={Main}>
              </Route>
            </Switch>
          </Router>
        );
    }

}

export default Routes