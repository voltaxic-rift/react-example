import { Reducer } from 'redux'
import { AxiosError } from 'axios'

import { JsonServerAction } from './actions/jsonServer'
import * as ActionType from './actions/jsonServerConstants'
import { User } from './services/jsonServer/models'

export type JsonServerState = {
  users: User[]
  isLoading: boolean
  error?: AxiosError | null
}

export const initialState: JsonServerState = {
  users: [],
  isLoading: false
}

const jsonServerReducer: Reducer<JsonServerState, JsonServerAction> = (
  state: JsonServerState = initialState,
  action: JsonServerAction
): JsonServerState => {
  switch (action.type) {
    case ActionType.GET_USERS_START:
      return {
        ...state,
        users: [],
        isLoading: true
      }
    case ActionType.GET_USERS_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false
      }
    case ActionType.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action
      return state
    }
  }
}

export default jsonServerReducer