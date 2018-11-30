import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import fetchUser from '../../actions/singleUser';

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
            {this.props.user ? (
              <div>
                <h1>
                  Hello,{' '}
                  <span className={cx(globalStyles['font-weight-bold'])}>{`${
                    this.props.user.name
                  }`}</span>
                </h1>
                <p>
                  <span className={cx(globalStyles['font-weight-bold'])}>
                    Email:
                  </span>
                  {` ${this.props.user.email}`}
                </p>
                <p>
                  <span className={cx(globalStyles['font-weight-bold'])}>
                    Username:
                  </span>
                  {` ${this.props.user.username}`}
                </p>
                <p>
                  <span className={cx(globalStyles['font-weight-bold'])}>
                    Phone:
                  </span>
                  {` ${this.props.user.phone}`}
                </p>
                <p>
                  <span className={cx(globalStyles['font-weight-bold'])}>
                    Website:
                  </span>
                  {` ${this.props.user.website}`}
                </p>
              </div>
            ) : (
              ' User!'
            )}
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
