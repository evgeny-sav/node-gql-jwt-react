import axios from 'axios';

class UserService {
  static getUserById(id) {
    return axios.post('http://localhost:3000/graphql', {
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
