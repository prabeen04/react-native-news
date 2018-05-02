import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class MyHeader extends Component {
  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>My News</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}
export default MyHeader;