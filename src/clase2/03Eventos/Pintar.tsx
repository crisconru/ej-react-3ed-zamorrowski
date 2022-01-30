import { useState } from "react"

const Pintar = () => {
  const [state, setState] = useState(null)

  const loadJSON = () => {
    console.log('empieza el fetch')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(res => setState(res))
      .catch(e => console.log(e))
  }
  return (
    <>
      <button onClick={loadJSON}>Pintar JSON</button>
      {
        state !== null
        ? <p>id: {state.id} - userID: {state.userId} - completado: {state.completed} - titulo: {state.title}</p> 
        : <p>Cargar JSON</p>
      }
    </>
  )
}

export default Pintar