import mongoose from 'mongoose';
import getProjection from '../utils/projection';

const userQueries = {
  users: async (root, args, { db: { UserModel } }, fieldASTs) => {
    try {
      const projection = getProjection(fieldASTs);
      return await UserModel.find({})
        .select(projection)
        .exec();
    } catch (e) {
      throw new Error(e.message);
    }
  },
  user: async (root, { id }, { db: { UserModel } }, fieldASTs) => {
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
