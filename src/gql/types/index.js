import UserType from './userType';
import MessageType from './messageType';
import QueryType from './queryType';
import MutationType from './mutationType';

const typeDefs = `
  ${UserType}
  ${MessageType}
  ${QueryType}
  ${MutationType}
`;

export default typeDefs;
