import axios from 'axios'

import { User } from './models'

type APIConfig = {
  baseURL: string
  timeout: number
}

const DEFAULT_API_CONFIG: APIConfig = {
  baseURL: 'http://localhost:4000',
  timeout: 7000
}

export const getUsersFactory = (optionConfig?: APIConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig
  }
  const instance = axios.create(config)
  const getUsers = async () => {
    try {
      const response = await instance.get('/users')

      if (response.status !== 200) {
        throw new Error('Server Error')
      }
      const users: User[] = response.data

      return users;
    } catch (err) {
      throw err
    }
  }

  return getUsers
}

export default axios