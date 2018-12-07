import mongoose from 'mongoose';
// import MessageModel from '../../db/models/message';
import getProjection from '../utils/projection';

const messageQueries = {
  messages: async (root, args, { db: { MessageModel } }, fieldASTs) => {
    try {
      const projection = getProjection(fieldASTs);
      return await MessageModel.find({})
        .select(projection)
        .exec();
    } catch (e) {
      throw new Error(e.message);
    }
  },
  message: async (root, { id }, { db: { MessageModel } }, fieldASTs) => {
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
