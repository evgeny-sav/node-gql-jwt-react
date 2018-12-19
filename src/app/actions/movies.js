import MovieService from '../services/movieService';
import constants from '../constants';

export const fetchMoviesStarted = () => ({
  type: constants.FETCH_MOVIES_STARTED,
});

export const fetchMoviesError = e => ({
  type: constants.FETCH_MOVIES_ERROR,
  payload: e,
});

export const fetchMoviesCompleted = payload => ({
  type: constants.FETCH_MOVIES_COMPLETED,
  payload,
});

export const fetchMovies = query => async dispatch => {
  dispatch(fetchMoviesStarted());
  try {
    const payload = await MovieService.searchMovies(query);
    dispatch(fetchMoviesCompleted(payload.data)); // TODO: infinite loading
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};

export default fetchMovies;
