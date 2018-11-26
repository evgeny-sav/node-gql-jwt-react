import React, { Component } from 'react';
import classNames from 'classnames';
import UserService from '../../services/userService';
import styles from './App.scss';

const cx = classNames.bind(styles);

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
        <h1 className={cx(styles.h1, styles.red)}>Hello World!!!</h1>
        <p>{this.state.user ? this.state.user.username : null}</p>
      </div>
    );
  }
}

export default App;
