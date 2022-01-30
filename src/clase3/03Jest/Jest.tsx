import { useState } from 'react'

const Jest = () => {
  const [collapse, setCollapse] = useState(true)
  return (
    <>
      <h1 style={{backgroundColor: 'red'}} onClick={() => setCollapse(!collapse)}>Jest</h1>
      <div style={{display: collapse ? 'none': 'block'}}>
        {/* Ejercicio 1 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 1</h1>
        
        {/* Ejercicio 2 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 2</h1>
        
        {/* Ejercicio 3 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 3</h1>
        
      </div>
    </>
  )
}

export default Jest