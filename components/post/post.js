import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Spinner, Fab, Icon, Button } from 'native-base';
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/posts';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isFetching: false,
            active: 'true'
        }
    }
    componentDidMount() {
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
        if (this.state.isFetching) {
            return  <Spinner color='blue' />
        }
        return (
            <Container>
                <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
                {this.state.posts.map(post => {
                    return (
                            <Card>
                                <CardItem header>
                                    <Text>{post.title}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {post.body}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Text>{post.author}: {post.date}</Text>
                                </CardItem>
                            </Card>
                    )
                })}
            </Container>
        )
    }
}
export default Post;