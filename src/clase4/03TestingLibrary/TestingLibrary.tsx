import { useState } from 'react'

const TestingLibrary = () => {
  const [collapse, setCollapse] = useState(true)
  return (
    <>
      <h1 style={{backgroundColor: 'red'}} onClick={() => setCollapse(!collapse)}>Testing Library</h1>
      <div style={{display: collapse ? 'none': 'block'}}>
        {/* Ejercicio 1 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 1</h1>
        
        {/* Ejercicio 2 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 2</h1>
        
      </div>
    </>
  )
}

export default TestingLibrary