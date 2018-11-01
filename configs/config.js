module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  API_PORT: process.env.API_PORT || 3000,
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
  JWT_SECRET: process.env.JWT_SECRET || 'jwtsecret',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://fluffyadmin:foof123@ds227469.mlab.com:27469/fluffy_db'
};
