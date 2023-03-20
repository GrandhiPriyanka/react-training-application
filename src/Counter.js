import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      count: Number(this.props.counterValue)
    }
  }


  increment() {
    this.setState((preState) => {
      return {
        count: preState.count + 1
      };
    });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState((preState) => {
        return {
          count: preState.count - 1
        };
      });
    } else {
      this.setState(() => {
        return {
          count: 0
        };
      });
    }
    
  }
  render() {
    const h5 = React.createElement(
      'h5',
      { className: 'counterClass' },
      this.state.count
    );
    const decrementButton = React.createElement(
      'button',
      { onClick: this.decrement },
      "-"
    );
    const incrementButton = React.createElement(
      'button',
      { onClick: this.increment },
      "+"
    );
    return (
      React.createElement(
        'div',
        null,
        decrementButton,
        h5,
        incrementButton
      )
    );
  }
}

export default Counter;