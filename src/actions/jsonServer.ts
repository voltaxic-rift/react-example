import { AxiosError } from 'axios'

import { User } from '../services/jsonServer/models'
import * as ActionType from './jsonServerConstants'

type GetUsersResult = {
  users: User[]
}

export const getUsers = {
  start: () => ({
    type: ActionType.GET_USERS_START as typeof ActionType.GET_USERS_START
  }),
  succeed: (result: GetUsersResult) => ({
    type: ActionType.GET_USERS_SUCCEED as typeof ActionType.GET_USERS_SUCCEED,
    payload: {result}
  }),
  fail: (error: AxiosError) => ({
    type: ActionType.GET_USERS_FAIL as typeof ActionType.GET_USERS_FAIL,
    payload: {error},
    error: true
  })
}

export type JsonServerAction =
  | ReturnType<typeof getUsers.start>
  | ReturnType<typeof getUsers.succeed>
  | ReturnType<typeof getUsers.fail>