import React, {useState, useEffect} from 'react'
import { List, Image } from 'semantic-ui-react'
import axios from '../services/api'

type Props = {
  user: User
}

type User = {
  id: number
  name: string
  description: string
  image: string
}

const User: React.FC<Props> = props => {
  const {user} = props
  return (
    <List.Item>
      <Image avatar src={user.image} />
      <List.Content>
        <List.Header as='a'>{user.name}</List.Header>
      </List.Content>
    </List.Item>
  )
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const res = await axios.get('/users')
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <List divided verticalAlign='middle'>
      {users.map(user => <User key={user.id} user={user} />)}
    </List>
  )
}

export default UserList