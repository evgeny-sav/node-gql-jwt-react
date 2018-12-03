import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} from 'graphql';
import mongoose from 'mongoose';
import UserGQLSchema from './user';
import userMutations from './mutations/user';
import UserDBModel from '../db/models/user';

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    users: {
      type: new GraphQLList(UserGQLSchema),
      async resolve() {
        try {
          return await UserDBModel.find({}); // todo: improve (don't return all users fields but only requested ones)
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
    user: {
      type: UserGQLSchema,
      args: {
        id: { type: GraphQLID },
      },
      async resolve(parentValue, args) {
        if (!mongoose.Types.ObjectId.isValid(args.id)) {
          throw new Error('Not valid user ID');
        }
        try {
          return await UserDBModel.findById(args.id);
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
  },
});

//todo: signup mutation
const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: userMutations,
});

export default schema;
