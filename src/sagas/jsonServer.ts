import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import * as Action from '../actions/jsonServerConstants'
import { getUsers } from '../actions/jsonServer'
import { getUsersFactory } from '../services/jsonServer/api'

function* runGetUsers() {
  try {
    const api = getUsersFactory()
    const users = yield call(api)

    yield put(getUsers.succeed(users))
  } catch (err) {
    yield put(getUsers.fail(err))
  }
}

export function* watchGetUsers() {
  yield takeLatest(Action.GET_USERS_START, runGetUsers)
}

export default function* rootSaga() {
  yield all([fork(watchGetUsers)])
}