import React, { Component } from 'react';
import classNames from 'classnames';
import UserService from '../../services/userService';
import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';

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
      <div className={cx(globalStyles.container)}>
        <div className={cx(globalStyles.row)}>
          <div className="col-6">
            <h1>
              Hello,
              <span className={cx(globalStyles['font-weight-bold'])}>
                {this.state.user ? ` ${this.state.user.username}` : ' World!'}
              </span>
            </h1>
            <button
              className={cx(
                globalStyles.btn,
                globalStyles['btn-outline-primary']
              )}
            >
              Press me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
