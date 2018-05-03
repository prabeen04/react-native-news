import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Welcome extends Component {
  render() {
    return (
      <View>
        <Text> Welcome Screen</Text>
        <Button title='Dashboard' onPress={()=>this.props.navigation.navigate('Dashboard')} />
      </View>
    )
  }
}
export default Welcome;