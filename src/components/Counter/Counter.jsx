import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      step: 0,
    };
  }

  changeInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: Number(value),
    });
  };

  next = () => {
    this.setState((state, prop) => {
      return {
        count: state.count + state.step,
      };
    });
  };

  prev = () => {
    this.setState((state, prop) => {
      return {
        count: state.count - state.step,
      };
    });
  };

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.step === this.state.step;
  }

  render () {
    console.log(11);
    const { count, step } = this.state;
    return (
      <div>
        <div>
          <p>{count}</p>
          <button onClick={this.next}>+</button>
          <button onClick={this.prev}>-</button>
        </div>

        <input
          type='range'
          name='step'
          value={step}
          onChange={this.changeInput}
        />
        {step}
      </div>
    );
  }
}

export default Counter;
