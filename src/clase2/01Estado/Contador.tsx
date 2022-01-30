import React from 'react';

class Contador extends React.Component {
  state = {
    count: 0
  }

  increment() {
    this.setState(state => ({ count: state.count + 1}))
  }

  decrement() {
    this.setState(state => ({ count: state.count - 1}))
  }

  render() {
    return (
      <>
        <p>Contador: {this.state.count}</p>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.decrement()}>-1</button>
      </>
    )
  }
}

export default Contador