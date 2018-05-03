import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Item, Footer, FooterTab, Label } from "native-base";
import MyHeader from '../components/header/header';
import MyFooter from '../components/footer/footer';
import Post from '../components/post/post';
import Chat from '../components/chat/chat';
import Profile from '../components/profile/profile';
class DashBoard extends Component {
  render() {
    return (
     <DashBoardTabNavigator/>
    )
  }
}
export default (DashBoardTabNavigator = TabNavigator(
    {
      Chat: { screen: props => <Chat {...props} /> },
      Profile: { screen: props => <Profile {...props} /> },
      Post: { screen: props => <Post {...props} /> }
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
                onPress={() => props.navigation.navigate("Chat")}
              >
                <Icon name="bowtie" />
                <Text>Chat</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate("Profile")}
              >
                <Icon name="briefcase" />
                <Text>Profile</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 2}
                onPress={() => props.navigation.navigate("Post")}
              >
                <Icon name="briefcase" />
                <Text>Post</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      }
    }
  ));