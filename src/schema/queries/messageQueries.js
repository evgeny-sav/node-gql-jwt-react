import mongoose from 'mongoose';
import MessageModel from '../../db/models/message';
import getProjection from '../utils/projection';

const messageQueries = {
  messages: async () => {
    try {
      return await MessageModel.find({}); // todo: improve (don't return all users fields but only requested ones)
    } catch (e) {
      throw new Error(e.message);
    }
  },
  message: async (_, { id }, ctx, fieldASTs) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Not valid user ID');
    }
    try {
      const projection = getProjection(fieldASTs);
      return await MessageModel.findById(id)
        .select(projection)
        .exec();
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default messageQueries;
