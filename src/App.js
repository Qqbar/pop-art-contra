import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

import Lamp from './Lamp.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lit: true,
      color: "red"
    }
  }

  componentDidMount() {
    setInterval( this.toggleLit, 1000);
  }

  toggleLit = () => {
    this.setState({ lit: !this.state.lit });
  }

  render() {

    var appStyles = {
      height: "100vh",
      position: "relative",
      overflow: "hidden"
    }

    return (
      <div className="App"
           style={ appStyles } >
        <Lamp color={ this.state.color }
              lit={ this.state.lit }/>
      </div>
    );
  }
}

export default App;
