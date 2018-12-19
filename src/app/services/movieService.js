import axios from 'axios';
import config from '../../../configs/config';

// 'https://api.themoviedb.org/3/search/movie?api_key={api_key}&language=en-US&query={query_string}&page=1&include_adult=true'

class MovieService {
  static getMovieById(id) {
    return axios.post(`${config.GQL_URL}`, {
      query: `query getMovie($id: String!) {
        movie(id: $id) {
          id
        }
      }`,
      variables: {
        id: id,
      },
    });
  }

  static searchMovies(query) {
    return axios.post(`${config.GQL_URL}`, {
      query: `query getMovies($query: String!) {
        movies(query: $query) {
          id
          title
          overview
          release_date
          poster_path
        }
      }`,
      variables: {
        query: query,
      },
    });
  }
}

export default MovieService;
