import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserList from './containers/UserList'
import {Container} from 'semantic-ui-react'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/users" component={UserList} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
