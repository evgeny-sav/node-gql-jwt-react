import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import graphqlHTTP from 'express-graphql';

// eslint-disable-next-line
import db from './src/db';
import logger from './src/utils/logger';
import config from './configs/config';
import GQLSchema from './src/gql';

/* TODO: auth, projection, pagination, sanitization, validation
 * TODO: JWT and Auth with GQL
 * MAYBE TODO: JWT and Auth with Passport + OAuth with Facebook/Github/Google
 * TODO: implement roles (admin, customer, superadmin, guest)
 * TODO: Tests (unit, integration, jest, mocha, chai) */

process.on('uncaughtException', err => {
  logger.error(`Caught exception: ${err}\n`);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan(':method :url :status :response-time ms'));

app.use('/', express.static('dist'));

app.use(
  '/graphql',
  graphqlHTTP({
    context: {
      db,
    },
    schema: GQLSchema,
    graphiql: true,
  })
);

// eslint-disable-next-line
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send('Error');
});

app.listen(config.API_PORT, err => {
  if (err) logger.error(err);
  logger.info(`Server started at ${config.API_PORT}`);
});
