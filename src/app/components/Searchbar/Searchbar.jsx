import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
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
    const { dispatch } = this.props;
    dispatch(fetchMovies(this.state.searchInput));
  };

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <div className={cx(globalStyles['form-group'])}>
          <div className={globalStyles['input-group-append']}>
            <div
              className={cx(globalStyles['input-group'], globalStyles['mb-5'])}
            >
              <input
                type="text"
                placeholder="Search movie ..."
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
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Searchbar);
