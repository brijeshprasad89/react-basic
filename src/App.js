import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import './App.css';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {color: "black"};

    // This binding is necessary to make `this` work in the callback
    this.changeColor = this.changeColor.bind(this);
  }

componentDidMount(){
  // alert("App Loaded");
}

changeColor(color) {
    this.setState({color: color})
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button color = "Red" changeColor = {this.changeColor} />
        <Button color = "Green" changeColor = {this.changeColor}/>
        <div style={{color:this.state.color}}>Hello </div>
      </div>
    );
  }
}

export default App;
