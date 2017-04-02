import React, { Component } from 'react';
import './App.css';

class Button extends Component {

constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.changeColor = this.changeColor.bind(this);
  }

componentDidMount(){
  // alert("App Loaded");
}

changeColor() {
    this.props.changeColor(this.props.color);
  }

  render() {
    // console.log(this);
    return (
        <button onClick={this.changeColor}>
            Change Color to {this.props.color}
        </button>
    );
  }
}

export default Button;
