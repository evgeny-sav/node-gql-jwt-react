import axios from 'axios';
import config from '../../../configs/config';

// 'https://api.themoviedb.org/3/search/movie?api_key={api_key}&language=en-US&query={query_string}&page=1&include_adult=true'

class PersonService {
  static getPersonById(id) {
    return axios.post(`${config.GQL_URL}`, {
      query: `query getPerson($id: Int!) {
        person(id: $id) {
          birthday
          known_for_department
          deathday
          id
          name
          movie_credits {
            cast {
              id
              title
              poster_path
              overview
            }
            crew {
              job
            }
          }
          also_known_as
          gender
          biography
          popularity
          place_of_birth
          profile_path
          adult
          imdb_id
          homepage
        }
      }`,
      variables: {
        id: id,
      },
    });
  }

  static searchPersons(query) {
    return axios.post(`${config.GQL_URL}`, {
      query: `query getPersons($query: String!) {
        persons(query: $query) {
          id
          popularity
          profile_path
          name
          known_for {
            id
            title
          }
          adult
        }
      }`,
      variables: {
        query: query,
      },
    });
  }
}

export default PersonService;
