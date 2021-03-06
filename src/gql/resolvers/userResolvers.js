import mongoose from 'mongoose';
import getProjection from '../utils/projection';

const userResolvers = {
  messages: async ({ _id }, args, { db: { MessageModel } }, fieldASTs) => {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new Error('Not valid user ID');
    }
    try {
      const projection = getProjection(fieldASTs);
      return await MessageModel.find({ userId: _id })
        .select(projection)
        .exec();
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default userResolvers;
