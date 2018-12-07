import mongoose from 'mongoose';

const UserMutation = {
  addUser: async (
    root,
    { name, username, email, phone, website },
    { db: { UserModel } }
  ) => {
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
  deleteUser: async (root, { id }, { db: { UserModel } }) => {
    try {
      return await UserModel.deleteOne({ _id: id });
    } catch (e) {
      throw new Error(e.message);
    }
  },
  editUser: async (
    root,
    { id, name, username, email, phone, website },
    { db: { UserModel } }
  ) => {
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
