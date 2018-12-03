import axios from 'axios';

class UserService {
  static getUserById(id) {
    return axios.post('http://localhost:3000/graphql', {
      query: `query getUser($id: ID!) {
        user(id: $id) {
          id
          name
          username
          email
          phone
          website
          createdAt
          updatedAt
        }
      }`,
      variables: {
        id: id,
      },
    });
  }
}

export default UserService;
