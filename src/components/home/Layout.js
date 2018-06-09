import React, { Component } from 'react';
// import '../../scss/Home.css';
import '../../scss/Home.css';
import Main from './Main';
import Side from './Side';

class Home extends Component {
  render() {
    return (
      <div className="wrapper fade-up">
        <Main />
        <Side />
      </div>
    );
  }
}

export default Home;
