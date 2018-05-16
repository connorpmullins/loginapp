import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input: [],
    inputLength: 0
  }

  textChangeHandler = (event) => {
    const value = event.target.value.split("");
    const length = event.target.value.length;
    this.setState( {inputLength: length} );
    this.setState( {input: value} );
    console.log(this.state.input);
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.input];
    chars.splice(index, 1);
    this.setState({input: chars});
  }

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'left',
      margin: '16px',
      border: '1px solid black',
    }

    let length = this.state.inputLength;
    let chars = null;

    chars = (
      <div>
        {this.state.input.map((input, index) => {
          return <CharComponent value={input} click={() => this.deleteCharHandler(index)}/>
        })}
      </div>
    )

    return (
      <div className="App" style={style}>
        <input type="text" onChange={(event) => this.textChangeHandler(event)}/>
        <p>
          {length}
        </p>
        <ValidationComponent length={this.state.inputLength} />
        {chars}
      </div>
    );
  }
}

export default App;
