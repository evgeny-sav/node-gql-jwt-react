import mongoose from 'mongoose';
import UserModel from '../../db/models/user';

const UserMutation = {
  addUser: async (_, { name, username, email, phone, website }) => {
    const id = new mongoose.Types.ObjectId();
    const user = new UserModel({
      _id: id,
      name,
      username,
      email,
      phone,
      website,
    });
    try {
      return await user.save();
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteUser: async (_, { id }) => {
    try {
      return await UserModel.deleteOne({ _id: id });
    } catch (e) {
      throw new Error(e.message);
    }
  },
  editUser: async (_, { id, name, username, email, phone, website }) => {
    //todo: edit password
    try {
      return await UserModel.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            name,
            username,
            email,
            phone,
            website,
          },
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default UserMutation;
