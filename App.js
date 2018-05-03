import React, { Component } from 'react';
import { Button, View, Text } from "react-native";
import { SwitchNavigator } from 'react-navigation';
import Welcome from './src/screen/welcome';
import Dashboard from './src/screen/dashboard';
export default class App extends Component {
  render() {
    return (
      <MySwitchNavigator/>
    );
  }
}
const MySwitchNavigator = SwitchNavigator({  
  Welcome: {
    screen: Welcome,
  },
  Dashboard: {
    screen: Dashboard,
  }
});