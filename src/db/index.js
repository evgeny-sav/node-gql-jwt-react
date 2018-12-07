import mongoose from 'mongoose';
import logger from '../utils/logger';
import config from '../../configs/config';

import UserModel from './models/user';
import MessageModel from './models/message';

mongoose.connect(
  config.MONGO_URI,
  { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.on('error', err => logger.error(err));
connection.once('open', () => logger.info('Connected to MongoDB'));

export default {
  UserModel,
  MessageModel,
};
