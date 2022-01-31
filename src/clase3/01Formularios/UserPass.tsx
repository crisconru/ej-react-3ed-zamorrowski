import React, { useRef, useState } from 'react';
import FuerzaDelPassword from './FuerzaDelPassword';

const initialState = {
    username: '',
    password: ''
}

const checkLength = (elem, len) => elem.length >= len

const checkUsername = e => checkLength(e, 1)
const checkPassword = e => checkLength(e, 8)

export const UserPass = ({fuerza = false}) => {
  const username = useRef(null)
  const password = useRef(null)
  const [invalid, setInvalid] = useState(true)
  const [passToStrength, setPassToStrength] = useState('')


  const handleChange = (e) => {
    console.log(e.target.value)
    const tmpInvalid = (checkUsername(username.current.value) && checkPassword(password.current.value)) ? false : true
    if (tmpInvalid !== invalid) setInvalid(tmpInvalid)
    if (e.target.value === password.current.value) setPassToStrength(password.current.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`username: ${username.current.value}\npassword: ${password.current.value}`)
  }

  return <>
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <input ref={username} type="text" name="username"/>
      <input ref={password} type="password" name="password"/>
      <input type="submit" value="Mandar" disabled={invalid}/>
    </form>
    {fuerza && <FuerzaDelPassword password={passToStrength}/>}
  </>
}

export default UserPass
