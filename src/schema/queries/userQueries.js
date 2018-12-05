import mongoose from 'mongoose';
import UserModel from '../../db/models/user';

const userQueries = {
  users: async () => {
    try {
      return await UserModel.find({}); // todo: improve (don't return all users fields but only requested ones)
    } catch (e) {
      throw new Error(e.message);
    }
  },
  user: async (_, { id }) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Not valid user ID');
    }
    try {
      return await UserModel.findById(id);
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default userQueries;
