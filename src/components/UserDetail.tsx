import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { User } from '../services/jsonServer/models'

export type UserDetailProps = {
  user: User
}

const UserDetail: React.FC<UserDetailProps> = ({
  user = {
    id: 999,
    name: 'Dummy User',
    description: `
      ヌベヂョンヌゾジョンベルミッティスモゲロンボョｗｗｗｗｗｗ
      ∧_∧ 
      ( ՞ةڼ◔) 
      ＿ ⊃／(＿＿_ 
      ／ └-(＿＿＿_／ 

      イヒーーｗｗｗイヒヒヒヒヒｗｗｗｗｗｗｗｗ 

      ＜⌒／ヽ-､_＿_ 
      ／＜_/＿＿＿＿／
    `,
    image: 'https://i.imgur.com/yWU6Dz7.png'
  }
}) => (
  <Grid.Row>
    <Grid.Column>
      <Header size='huge' dividing>{user.name}</Header>
      <Grid columns='2'>
        <Grid.Column width='5'>
          <Image src={user.image} size='medium' circular />
        </Grid.Column>
        <Grid.Column width='11'>
          <div style={{whiteSpace: 'pre-line'}}>
            <p>{user.description}</p>
          </div>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid.Row>
)

export default UserDetail