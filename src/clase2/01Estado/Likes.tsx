import React from 'react';

class Likes extends React.Component {
  state = {
    likes: 50,
  }
  addLike =  true

  handleClick = () => {
    const sumando = this.addLike ? 1 : -1
    this.setState(
      state => ({likes: state.likes + sumando}),
      () => {this.addLike = !this.addLike}
    )
  }

  render() {
    return (
      <>
        <p>Likes: {this.state.likes}</p>
        <button onClick={this.handleClick}>{this.addLike ? 'Like' : 'Dislike'}</button>
      </>
    )
  }
}

export default Likes