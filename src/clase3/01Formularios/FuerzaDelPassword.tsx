import React, { useRef, useState } from 'react';

const FuerzaDelPassword = () => {
  const [password, setPassword] = useState('')
  const [fuerza, setFuerza] = useState(0)
  const passRef = useRef(null);
  const fuerzaText = () => {
    if (fuerza >= 4) return 'Contraseña fuerte'
    if (fuerza >= 2) return 'Contraseña normal'
    if (fuerza >= 1) return 'Contraseña debil'
    return 'No hay contraseña'
  }

  handleChange = ()=> {
    let f = 0
    const value = passRef.current.value
    if (value.length >= 8) {
        f += 1
    }
    // if (/[0-9]/.test())
  }

  return <>
    <input ref={passRef} type="text" name="password" onChange={handleChange}/>
    <p>{fuerzaText}</p>
  </>
}

export default FuerzaDelPassword
