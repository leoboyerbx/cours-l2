import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    // ...
  }

  componentDidMount() {
    // ...
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

