import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import MyFooter from '../footer/footer';

class MyHeader extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>My News</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.props.navigation.navigate('MyFooter')}>
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
    )
  }
}
export default MyHeader;