import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserList from './containers/UserList'
import {Container} from 'semantic-ui-react'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container text style={{ marginTop: '7em' }}>
        <Route path="/users" component={UserList} />
      </Container>
    </div>
  )
}

export default App
