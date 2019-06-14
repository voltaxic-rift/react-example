import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RouteComponentProps, withRouter } from 'react-router'

import UserList, { UserListProps } from '../components/UserList'
import { User } from '../services/jsonServer/models'
import { JsonServerState } from '../reducer'
import { getUsers } from '../actions/jsonServer'

type StateProps = {
  users: User[],
  isLoading: boolean
}

type DispatchProps = {
  getUsersStart: () => void
}

type EnhancedUserListProps = UserListProps &
  StateProps &
  DispatchProps &
  RouteComponentProps

const mapStateToProps = (state: JsonServerState): StateProps => ({
  users: state.users,
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getUsersStart: () =>
        getUsers.start()
    },
    dispatch
  )

const UserListContainer: React.FC<EnhancedUserListProps> = ({
  users,
  isLoading,
  getUsersStart
}) => {
  useEffect(() => {
    getUsersStart()
  }, [])

  return (
    <UserList users={users} isLoading={isLoading} />
  )
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserListContainer)
)