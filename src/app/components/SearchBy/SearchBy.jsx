import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import styles from './SearchBy.module.scss';

import setSearchFilter from '../../actions/search';

const cx = classNames.bind(styles);

class SearchBy extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(setSearchFilter('name'));
  }

  handleClick = btnName => {
    const { dispatch } = this.props;
    dispatch(setSearchFilter(btnName));
  };

  render() {
    const { searchFilter } = this.props;
    // todo: extract buttons to Button component
    return (
      <div className={cx(globalStyles['col-12'], globalStyles['mb-5'])}>
        <span className={cx(globalStyles['mr-1'], globalStyles['h6'])}>
          Search filters:
        </span>
        <button
          className={cx(
            {
              [globalStyles['active']]: 'name' === searchFilter,
            },
            globalStyles['btn'],
            globalStyles['btn-sm'],
            globalStyles['btn-outline-info'],
            globalStyles['mr-1'],
            styles['small-btn']
          )}
          onClick={e => this.handleClick('name')}
        >
          name
        </button>
        <button
          className={cx(
            {
              [globalStyles['active']]: 'director' === searchFilter,
            },
            globalStyles['btn'],
            globalStyles['btn-sm'],
            globalStyles['btn-outline-info'],
            globalStyles['mr-1'],
            styles['small-btn']
          )}
          onClick={e => this.handleClick('director')}
        >
          director
        </button>
        <button
          className={cx(
            {
              [globalStyles['active']]: 'actor' === searchFilter,
            },
            globalStyles['btn'],
            globalStyles['btn-sm'],
            globalStyles['btn-outline-info'],
            globalStyles['mr-1'],
            styles['small-btn']
          )}
          onClick={e => this.handleClick('actor')}
        >
          actor
        </button>
        <button
          className={cx(
            {
              [globalStyles['active']]: 'genre' === searchFilter,
            },
            globalStyles['btn'],
            globalStyles['btn-sm'],
            globalStyles['btn-outline-info'],
            globalStyles['mr-1'],
            styles['small-btn']
          )}
          onClick={e => this.handleClick('genre')}
        >
          genre
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ searchFilter }) => ({ searchFilter });

export default connect(mapStateToProps)(SearchBy);
