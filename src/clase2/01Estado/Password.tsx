import React from 'react';

class Password extends React.Component {
  state = {
      show: false
  }

  showPassword() {
    this.setState(state => ({ show: !state.show}))
  }

  render() {
    // console.log(this.state.show)
    
    return (
      <>
        <input type={this.state.show ? 'text' : 'password'}/>
        <button onClick={() => this.showPassword()}>
          {this.state.show ? 'Ocultar password' : 'Mostrar password'}
        </button>
      </>
    )
  }
}

export default Password