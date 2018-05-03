import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { TabNavigator } from 'react-navigation';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import MyHeader from './src/components/header/header';
import MyFooter from './src/components/footer/footer';
import Post from './src/components/post/post';

export default class App extends Component {
  render() {
    return (
      <Container>
        <MyHeader/>
        <Content>
          <Post/>
         </Content> 
        <MyFooter/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
