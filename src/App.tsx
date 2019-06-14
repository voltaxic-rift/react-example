import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserList from './containers/UserList'
import UserDetail from './components/UserDetail'
import { Grid } from 'semantic-ui-react'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Grid container style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/:id" component={UserDetail} />
        </Switch>
      </Grid>
    </div>
  )
}

export default App
