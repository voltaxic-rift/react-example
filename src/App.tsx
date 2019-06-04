import React from 'react'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import {Container} from 'semantic-ui-react'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container text style={{ marginTop: '7em' }}>
        <UserList />
      </Container>
    </div>
  )
}

export default App
