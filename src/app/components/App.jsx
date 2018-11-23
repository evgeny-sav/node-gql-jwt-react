import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    axios
      .post('http://localhost:3000/graphql', {
        query: `{
          user {
            id
            name
            username
            email
            phone
            website
          }
        }`,
      })
      .then(res => this.setState({ ...res.data.data }));
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>{this.state.user ? this.state.user.username : null}</p>
      </div>
    );
  }
}

export default App;
