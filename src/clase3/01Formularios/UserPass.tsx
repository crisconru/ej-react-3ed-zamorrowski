import React, { useState } from 'react';

const initialState = {
    username: '',
    password: ''
}

export const UserPass = () => {

  const [state, setState] = useState(initialState);
  const checkLength = elem => elem.length >= 8

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setState({...state, [e.target.name]: e.target.value})
    
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" name="username"/>
    <input type="password" name="password"/>
    <input type="submit" value="Mandar" />
  </form>
}

export default UserPass
