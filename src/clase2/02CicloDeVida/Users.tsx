import React from 'react';

class Users extends React.Component {
  state = {
    users: ['Papa', 'Pepe'],
  }

  componentDidMount() {
    this.setState(state => ({users: [...state.users, 'Pipi']}))
  }

  componentWillUnmount() {
    console.log('¡Componente destruido!')
  }

  render() {
    return (
      <>
        <p>Users: {this.state.users}</p>
      </>
    )
  }
}

export default Users