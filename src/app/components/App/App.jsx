import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import fetchUser from '../../actions/singleItem';

import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUser());
  }

  render() {
    return (
      <div className={cx(globalStyles.container)}>
        <div className={cx(globalStyles.row)}>
          <div className="col-6">
            <h1>
              Hello,
              <span className={cx(globalStyles['font-weight-bold'])}>
                {this.props.user ? ` ${this.props.user.name}` : ' World!'}
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

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(App);
