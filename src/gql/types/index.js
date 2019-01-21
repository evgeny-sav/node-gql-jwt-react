import UserType from './userType';
import MessageType from './messageType';
import MovieType from './movieType';
import PersonsType from './personsType';
import PersonType from './personType';
import QueryType from './queryType';
import MutationType from './mutationType';

const typeDefs = `
  ${UserType}
  ${MessageType}
  ${MovieType}
  ${PersonsType}
  ${PersonType}
  ${QueryType}
  ${MutationType}
`;

export default typeDefs;
