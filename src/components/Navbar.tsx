import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'

const Navbar: React.FC = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        React Example
      </Menu.Item>
      <Menu.Item as='a' position='right'>
        <Image size='mini' src='https://i.imgur.com/ZAVjkLI.png' />
      </Menu.Item>
    </Container>
  </Menu>
)

export default Navbar