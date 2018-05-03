import React, { Component } from 'react';
import { Button, View, Text } from "react-native";
import { StackNavigator } from 'react-navigation';
import Welcome from './src/screen/welcome';
import Dashboard from './src/screen/dashboard';
export default class App extends Component {
  render() {
    return (
      <MyStackNavigator/>
    );
  }
}
const MyStackNavigator = StackNavigator({  
  Welcome: {
    screen: Welcome,
  },
  Dashboard: {
    screen: Dashboard,
  }
});