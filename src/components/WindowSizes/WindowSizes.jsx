import React, { Component } from 'react';

class Windowsizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  resizeHandler = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentDidMount () {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render () {
    return (
      <div>
        <p>width: {this.state.width}</p>

        <p>height: {this.state.height}</p>
      </div>
    );
  }
}

export default Windowsizes;
