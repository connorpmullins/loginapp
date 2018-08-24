import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="arrange arrange-middle">
          <div className="arrange-fit">
            <img className="border-rounded-circle" src="http://placeimg.com/44/44/animals" alt="animal"/>
          </div>
          <div className="arrange-fill plxs">
            <h6 className="mvn">Connor Mullins</h6>
            <span className="type-weak">New Hire</span>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
