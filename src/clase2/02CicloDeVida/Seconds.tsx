import React from 'react';

class Users extends React.Component {
  state = {
    seconds: 0,
  }

  interval = null

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({seconds: state.seconds + 1}))
    }, 1000)
  }

  componentWillUnmount() {
    console.log('¡Componente destruido!')
    clearInterval(this.interval)
    this.interval = null
  }

  render() {
    return (
      <>
        <p>Seconds: {this.state.seconds}</p>
      </>
    )
  }
}

export default Users