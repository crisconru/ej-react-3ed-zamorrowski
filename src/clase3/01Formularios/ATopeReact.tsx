import { useRef, useState } from "react"

const clave = 'A tope con React'

const ATopeReact = () => {

  const [validacion, setValidacion] = useState('')
  const campo = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const mensaje = campo.current.value !== clave ? 'ERROR' : 'Correcto sæcio'
    setValidacion(mensaje)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={campo} type='text' />
      </form>
      <p>{validacion}</p>
    </>
  )
}
export default ATopeReact
