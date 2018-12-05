import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import mongoose from 'mongoose';
import UserType from '../user';
import UserModel from '../../db/models/user';

const UserMutation = new GraphQLObjectType({
  name: 'UserMutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
      },
      async resolve(parentVal, args) {
        const id = new mongoose.Types.ObjectId();
        const user = new UserModel({
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
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, args) {
        try {
          return await UserModel.deleteOne({ _id: args.id });
        } catch (e) {
          throw new Error(e.message);
        }
      },
    },
    editUser: {
      type: UserType,
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
          return await UserModel.updateOne(
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

export default UserMutation;
