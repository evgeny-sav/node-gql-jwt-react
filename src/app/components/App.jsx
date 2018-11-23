import React, { Component } from 'react';
import UserService from '../services/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    UserService.getUsers().then(res => this.setState({ ...res.data.data }));
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
