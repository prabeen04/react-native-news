import React, { Component } from 'react';
import { Button, View, Text } from "react-native";
import { StackNavigator } from 'react-navigation';
import MyHeader from './src/components/header/header';
import MyFooter from './src/components/footer/footer';
import Post from './src/components/post/post';
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
export default StackNavigator({
  App: {
    screen: App,
  },
});