import MovieService from '../services/movieService';
import PersonService from '../services/PersonService';
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

export const fetchMovies = (query, searchFilter) => async dispatch => {
  dispatch(fetchMoviesStarted());
  try {
    if (searchFilter === 'actor') {
      const payload = await PersonService.searchPersons(query);
      const person = await PersonService.getPersonById(
        payload.data.data.persons[0].id
      );
      dispatch(
        fetchMoviesCompleted(person.data.data.person.movie_credits.cast)
      );
      return;
    }
    const payload = await MovieService.searchMovies(query);
    dispatch(fetchMoviesCompleted(payload.data.data.movies)); // TODO: infinite loading
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};

export default fetchMovies;
