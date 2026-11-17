import React from 'react'
import Container from './Components/Container'
import Navber from './Layouts/Navber'
import Bunner from './Layouts/Bunner'

const App = () => {
  return (
    <div>
      <Container>
        <Navber/>
        <Bunner/>
      </Container>
      </div>
  )
}

export default App