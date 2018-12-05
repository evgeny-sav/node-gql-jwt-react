import mongoose from 'mongoose';
import MessageModel from '../../db/models/message';

const messageQueries = {
  messages: async () => {
    try {
      return await MessageModel.find({}); // todo: improve (don't return all users fields but only requested ones)
    } catch (e) {
      throw new Error(e.message);
    }
  },
  message: async (_, { id }) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Not valid user ID');
    }
    try {
      return await MessageModel.findById(id);
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default messageQueries;
