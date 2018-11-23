import axios from 'axios';

class UserService {
  static getUsers() {
    return axios.post('http://localhost:3000/graphql', {
      query: `{
        user {
          id
          name
          username
          email
          phone
          website
        }
      }`,
    });
  }
}

export default UserService;
