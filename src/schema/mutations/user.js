import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import mongoose from 'mongoose';
import UserGQLSchema from '../user';
import UserDBModel from '../../db/models/user';

const userMutation = new GraphQLObjectType({
  name: 'UserMutation',
  fields: {
    addUser: {
      type: UserGQLSchema,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
      },
      async resolve(parentVal, args) {
        const id = new mongoose.Types.ObjectId();
        const user = new UserDBModel({
          _id: id,
          ...args,
        });
        try {
          return await user.save();
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
    deleteUser: {
      type: UserGQLSchema,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, args) {
        try {
          return await UserDBModel.deleteOne({ _id: args.id });
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
    editUser: {
      type: UserGQLSchema,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
        //todo: edit password
      },
      async resolve(parentValue, args) {
        try {
          return await UserDBModel.updateOne(
            {
              _id: args.id,
            },
            {
              $set: {
                ...args,
              },
            }
          );
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
  },
});

export default userMutation;
