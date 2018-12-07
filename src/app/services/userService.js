import axios from 'axios';
import config from '../../../configs/config';

// 'https://api.themoviedb.org/3/search/movie?api_key={api_key}&language=en-US&query={query_string}&page=1&include_adult=true'

class UserService {
  static getUserById(id) {
    return axios.post(`${config.GQL_URL}`, {
      query: `query getUser($id: String!) {
        user(id: $id) {
          id
          name
          username
          email
          phone
          website
          createdAt
          updatedAt
          messages {
            id
            userId
            body
          }
        }
      }`,
      variables: {
        id: id,
      },
    });
  }
}

export default UserService;
