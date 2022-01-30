import { useState } from 'react'

const UnitTest = () => {
  const [collapse, setCollapse] = useState(true)
  return (
    <>
      <h1 style={{backgroundColor: 'red'}} onClick={() => setCollapse(!collapse)}>Unit Test y TDD</h1>
      <div style={{display: collapse ? 'none': 'block'}}>
        {/* Ejercicio 1 */}
        <h1 style={{backgroundColor: 'green'}}>Ejercicio 1</h1>
        
      </div>
    </>
  )
}

export default UnitTest