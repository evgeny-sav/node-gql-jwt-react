import UserType from './userType';
import MessageType from './messageType';
import MovieType from './movieType';
import QueryType from './queryType';
import MutationType from './mutationType';

const typeDefs = `
  ${UserType}
  ${MessageType}
  ${MovieType}
  ${QueryType}
  ${MutationType}
`;

export default typeDefs;
