import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import SearchBy from '../SearchBy/SearchBy';

import styles from './Searchbar.module.scss';

import fetchMovies from '../../actions/movies';

const cx = classNames.bind(styles);

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  submitSearch = e => {
    e.preventDefault();
    const { dispatch, searchFilter } = this.props;
    dispatch(fetchMovies(this.state.searchInput, searchFilter));
  };

  render() {
    return (
      <div className={globalStyles.row}>
        <div className={globalStyles['col-12']}>
          <form onSubmit={this.submitSearch}>
            <div className={cx(globalStyles['form-group'])}>
              <div className={globalStyles['input-group-append']}>
                <div className={cx(globalStyles['input-group'])}>
                  <input
                    type="text"
                    placeholder="Search"
                    className={globalStyles['form-control']}
                    onChange={this.handleInputChange}
                  />
                  <button
                    className={cx(
                      globalStyles['btn'],
                      globalStyles['btn-outline-primary']
                    )}
                    type="button"
                    onClick={this.submitSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <SearchBy />
      </div>
    );
  }
}

const mapStateToProps = ({ searchFilter }) => ({ searchFilter });

export default connect(mapStateToProps)(Searchbar);
