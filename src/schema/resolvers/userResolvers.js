import mongoose from 'mongoose';
import MessageModel from '../../db/models/message';

const userResolvers = {
  messages: async ({ _id }) => {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new Error('Not valid user ID');
    }
    try {
      return await MessageModel.find({ userId: _id });
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default userResolvers;
