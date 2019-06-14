import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, List, Image } from 'semantic-ui-react'
import Spinner from './Spinner'
import { User } from '../services/jsonServer/models'

export type UserListProps = {
  users: User[]
  isLoading?: boolean
}

const UserList: React.FC<UserListProps> = ({
  users = [],
  isLoading = false
}) => {
  return (
    <Grid.Row centered>
      <Grid.Column width='12'>
        {isLoading ? (
          <Spinner />
        ) : (
          <List divided size='big' verticalAlign='middle'>
            {users.map(user => (
              <List.Item key={user.id}>
                <Image avatar src={user.image} />
                <List.Content>
                  <List.Header as='a'>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        )}
      </Grid.Column>
    </Grid.Row>
  )
}

export default UserList