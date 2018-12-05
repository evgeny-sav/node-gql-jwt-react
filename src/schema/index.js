import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} from 'graphql';
import mongoose from 'mongoose';
import UserType from './user';
import UserMutation from './mutations/user';
import UserModel from '../db/models/user';

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve() {
        try {
          return await UserModel.find({}); // todo: improve (don't return all users fields but only requested ones)
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      async resolve(parentValue, args) {
        if (!mongoose.Types.ObjectId.isValid(args.id)) {
          throw new Error('Not valid user ID');
        }
        try {
          return await UserModel.findById(args.id);
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
  },
});

//todo: signup mutation
const GQLSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: UserMutation,
});

export default GQLSchema;
