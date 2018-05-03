import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import MyHeader from '../header/header';

class Chat extends Component {
  render() {
    return (
      <View>
        <MyHeader/>
        <Text> Chat Component </Text>
        <Button title="Logout"onPress={()=>this.props.navigation.navigate('Welcome')}/>
      </View>
    )
  }
}
export default Chat;