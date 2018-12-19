import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
// import fetchMovies from '../../actions/movies';

import globalStyles from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieList.module.scss';
import fetchMovies from '../../actions/movies';

const cx = classNames.bind(styles);

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const query = 'vikings';
    dispatch(fetchMovies(query));
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <div className={cx(globalStyles['input-group'], globalStyles['mb-5'])}>
          <input
            type="text"
            placeholder="Type something"
            className={globalStyles['form-control']}
          />
          <div className={globalStyles['input-group-append']}>
            <button
              className={cx(
                globalStyles['btn'],
                globalStyles['btn-outline-primary']
              )}
              type="button"
            >
              Search
            </button>
          </div>
        </div>

        <h1 className={globalStyles.h1}>Movies</h1>
        <hr />
        <div className={globalStyles.row}>
          {movies.map(movie => (
            <div key={movie.id} className={globalStyles['col-4']}>
              <div
                className={cx(globalStyles.card, globalStyles['mb-5'])}
                style={{ width: '18rem' }}
              >
                <img
                  className={globalStyles['card-img-top']}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${
                          movie.poster_path
                        }?api_key=2dbb191a226476d26c943d4227f6bee1?api_key=2dbb191a226476d26c943d4227f6bee1`
                      : 'http://via.placeholder.com/300x430.png/fff/ccc?text=No image'
                  }
                  alt="Card image cap"
                />
                <div className={globalStyles['card-body']}>
                  <h5 className={globalStyles.h5} key={movie.id}>
                    {movie.title}
                  </h5>
                  {movie.overview ? <hr /> : null}
                  <p className={globalStyles['card-text']}>
                    {movie.overview.substr(0, 100)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
});

export default connect(mapStateToProps)(MovieList);
