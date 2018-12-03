import mongoose from 'mongoose';
import logger from '../utils/logger';
import config from '../../configs/config';

mongoose.connect(
  config.MONGO_URI,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', err => logger.error(err));
db.once('open', () => logger.info('Connected to MongoDB'));

export default db;
