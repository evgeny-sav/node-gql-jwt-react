import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
// import fetchUser from '../../actions/singleUser';

import Searchbar from '../Searchbar/Searchbar';
import MovieList from '../MovieList/MovieList';

import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // const { dispatch } = this.props;
    // const id = '5c055939afe75c1b808d2057';
    // dispatch(fetchUser(id));
  }

  render() {
    return (
      <div>
        <nav
          className={cx(
            globalStyles['navbar'],
            globalStyles['navbar-expand-lg'],
            globalStyles['navbar-light'],
            globalStyles['bg-light']
          )}
        >
          <Link className={globalStyles['navbar-brand']} to="/">
            Website
          </Link>
          <button
            className={globalStyles['navbar-toggler']}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={globalStyles['navbar-toggler-icon']} />
          </button>
          <div
            className={cx(
              globalStyles['collapse'],
              globalStyles['navbar-collapse']
            )}
            id="navbarNavAltMarkup"
          >
            <div className={globalStyles['navbar-nav']}>
              <Link
                className={cx(
                  globalStyles['nav-item'],
                  globalStyles['nav-link'],
                  globalStyles.active
                )}
                to="/"
              >
                Home <span className={globalStyles['sr-only']}>(current)</span>
              </Link>
              <Link
                className={cx(
                  globalStyles['nav-item'],
                  globalStyles['nav-link']
                )}
                to="/"
              >
                Features
              </Link>
              <Link
                className={cx(
                  globalStyles['nav-item'],
                  globalStyles['nav-link']
                )}
                to="/"
              >
                Pricing
              </Link>
              <Link
                className={cx(
                  globalStyles['nav-item'],
                  globalStyles['nav-link']
                )}
                to="/"
              >
                Disabled
              </Link>
            </div>
          </div>
        </nav>
        <div className={cx(globalStyles.container, globalStyles['mt-3'])}>
          <div className={cx(globalStyles.row)}>
            <div className={globalStyles['col-12']}>
              <Searchbar />
              <MovieList />
            </div>
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
