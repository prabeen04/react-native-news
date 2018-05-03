import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Item, Footer, FooterTab, Label } from "native-base";
import MyHeader from '../components/header/header';
import MyFooter from '../components/footer/footer';
class DashBoard extends Component {
  render() {
    return (
     <DashBoardTabNavigator/>
    )
  }
}
export default (DashBoardTabNavigator = TabNavigator(
    {
      LucyChat: { screen: props => <MyHeader {...props} /> },
      JadeChat: { screen: props => <MyHeader {...props} /> }
    },
    {
      tabBarPosition: "bottom",
      tabBarComponent: props => {
        return (
          <Footer>
            <FooterTab>
              <Button
                vertical
                active={props.navigationState.index === 0}
                onPress={() => props.navigation.navigate("MyHeader")}
              >
                <Icon name="bowtie" />
                <Text>Lucy</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate("MyFooter")}
              >
                <Icon name="briefcase" />
                <Text>Nine</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      }
    }
  ));