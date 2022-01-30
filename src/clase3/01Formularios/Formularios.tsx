import { useState } from 'react'
import FuerzaDelPassword from './FuerzaDelPassword'
import UserPass from './UserPass'

const Formularios = () => {
  const [collapse, setCollapse] = useState(true)
  return (
    <>
      <h1 style={{backgroundColor: 'red'}} onClick={() => setCollapse(!collapse)}>Formularios</h1>
      <div style={{display: collapse ? 'none': 'block'}}>
        {/* Ejercicio 1 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 1</h1>
        
        {/* Ejercicio 2 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 2</h1>
        
        {/* Ejercicio 3 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 3</h1>
        <UserPass />
        {/* Ejercicio 4 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 4</h1>
        {/* <FuerzaDelPassword /> */}
        {/* Ejercicio 5 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 5</h1>
        
      </div>
    </>
  )
}

export default Formularios