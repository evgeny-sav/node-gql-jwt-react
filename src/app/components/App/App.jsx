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
    const id = '5c055939afe75c1b808d2057';
    dispatch(fetchUser(id));
  }

  render() {
    return (
      <div className={cx(globalStyles.container, globalStyles['mt-3'])}>
        <div className={cx(globalStyles.row)}>
          <div className="col-6">
            {this.props.user ? (
              <div>
                <div className={globalStyles.card} style={{ width: '18rem' }}>
                  <div className={globalStyles['card-body']}>
                    <h4 className={globalStyles['card-title']}>
                      {this.props.user.name}{' '}
                      <small
                        className={cx(
                          globalStyles.small,
                          globalStyles['text-muted']
                        )}
                      >
                        aka. {this.props.user.username}
                      </small>
                    </h4>
                    <h6
                      className={cx(
                        globalStyles['card-subtitle'],
                        globalStyles['mb-2'],
                        globalStyles['text-muted']
                      )}
                    >
                      Web: {this.props.user.website}
                    </h6>
                    <h6
                      className={cx(
                        globalStyles['card-subtitle'],
                        globalStyles['mb-2'],
                        globalStyles['text-muted']
                      )}
                    >
                      Email: {this.props.user.email}
                    </h6>
                    <h6
                      className={cx(
                        globalStyles['card-subtitle'],
                        globalStyles['mb-2'],
                        globalStyles['text-muted']
                      )}
                    >
                      Tel.: {this.props.user.phone}
                    </h6>
                    <hr />
                    <div className={globalStyles['card-text']}>
                      {this.props.user.messages.map(msg => (
                        <p key={msg.id}>
                          {msg.body} by userId{' '}
                          <span
                            className={cx(
                              globalStyles['font-italic'],
                              globalStyles['text-info']
                            )}
                          >
                            {msg.userId}
                          </span>
                        </p>
                      ))}
                    </div>
                    <button
                      className={cx(
                        globalStyles.btn,
                        globalStyles['btn-outline-primary']
                      )}
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ' User!'
            )}
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
