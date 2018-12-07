import mongoose from 'mongoose';
import UserModel from '../../db/models/user';
import getProjection from '../utils/projection';

const userQueries = {
  users: async () => {
    try {
      return await UserModel.find({}); // todo: improve (don't return all users fields but only requested ones)
    } catch (e) {
      throw new Error(e.message);
    }
  },
  user: async (_, { id }, ctx, fieldASTs) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Not valid user ID');
    }
    try {
      const projection = getProjection(fieldASTs);
      return await UserModel.findById(id)
        .select(projection)
        .exec();
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default userQueries;
