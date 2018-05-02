import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/posts';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isFetching: false
        }
    }
    componentDidMount(){
        this.setState({
            isFetching: true
        })
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    posts: data,
                    isFetching: false
                })
            })
    }
    render() {
        if(this.state.isFetching){
            return <Text>Loading...</Text>
        }
        return (
            <Container>
            {this.state.posts.map(post => {
                return(
                    <Card>
                    <CardItem>
                      <Body>
                        <Text>
                           //Your text here
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                )
            })}
            </Container>
        )
    }
}
export default Post;