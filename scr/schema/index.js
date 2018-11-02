import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} from 'graphql';
import User from './user';

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    users: {
      type: new GraphQLList(User),
      // eslint-disable-next-line
      resolve(parentValue, args) {
        return []; //todo: fetch from DB
      },
    },
    user: {
      type: User,
      args: {
        id: { type: GraphQLID },
      },
      // eslint-disable-next-line
      resolve(parentValue, args) {
        //todo: fetch from DB
        return {
          id: '1',
          name: 'John Doe',
          username: 'jd',
          email: 'jd@gmail.com',
          phone: '+19172008384',
          website: 'johnd.com',
        };
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
});

export default schema;
