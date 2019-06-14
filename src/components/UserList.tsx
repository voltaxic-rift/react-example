import React from 'react'
import { List, Image } from 'semantic-ui-react'
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
    isLoading ? (
      <Spinner />
    ) : (
      <List divided verticalAlign='middle'>
        {users.map(user => (
          <List.Item key={user.id}>
            <Image avatar src={user.image} />
            <List.Content>
              <List.Header as='a'>{user.name}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    )
  )
}

export default UserList