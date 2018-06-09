import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './navbar';
import Home from './home';
import Portfolio from './portfolio';

import '../scss/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
