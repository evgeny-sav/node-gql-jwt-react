import mongoose from 'mongoose';
import MessageModel from '../../db/models/message';

const MessageMutation = {
  addMessage: async (_, { userId, body }) => {
    const id = new mongoose.Types.ObjectId();
    const message = new MessageModel({
      _id: id,
      userId,
      body,
    });
    try {
      return await message.save();
    } catch (e) {
      throw new Error(e.message);
    }
  },
  // deleteMessge: async (_, { id }) => {
  //   try {
  //     return await UserModel.deleteOne({ _id: id });
  //   } catch (e) {
  //     throw new Error(e.message);
  //   }
  // },
  // editMessge: async (_, { id, name, username, email, phone, website }) => {
  //   //todo: edit password
  //   try {
  //     return await UserModel.updateOne(
  //       {
  //         _id: id,
  //       },
  //       {
  //         $set: {
  //           name,
  //           username,
  //           email,
  //           phone,
  //           website,
  //         },
  //       }
  //     );
  //   } catch (e) {
  //     throw new Error(e.message);
  //   }
  // },
};

export default MessageMutation;
