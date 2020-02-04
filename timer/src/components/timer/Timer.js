import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    // ...
  }

  render () {
    return (
      <div data-testid="timer">
        {this.state.counter}
      </div>
    );
  }
}

export default Timer;

