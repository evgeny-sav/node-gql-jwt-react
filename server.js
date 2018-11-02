import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { format, createLogger, transports } from "winston";
import morgan from "morgan";
import graphqlHTTP from "express-graphql";
import config from "./configs/config";
import schema from "./scr/schema";
const { combine, timestamp, label, printf } = format;

/*
 * TODO: mongoose schemas ?
 * TODO: setup linters
 * TODO: sanitize and validate
 * TODO: JWT and Auth with GQL
 * MAYBE TODO: JWT and Auth with Passport + OAuth with Facebook/Github/Google
 * TODO: implement roles (admin, customer, superadmin, guest)
 * TODO: create react app, redux
 * TODO: git-hooks (lint, test)
 * TODO: Tests (unit, integration, jest, mocha, chai)
 * TODO: CI/CD with Travis
**/

const logger = createLogger({
  format: combine(
    label({ label: "API" }),
    timestamp(),
    printf(info => {
      return `${info.timestamp} [${info.label}:${info.level.toUpperCase()}] : ${
        info.message
      }`;
    })
  ),
  transports: [new transports.Console()]
});

process.on("uncaughtException", err => {
  logger.error(`Caught exception: ${err}\n`);
});

mongoose.connect(
  config.MONGO_URI,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", err => logger.error(err));
db.once("open", () => logger.info("Connected to MongoDB"));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan(":method :url :status :response-time ms"));

// Just example how to use routers
// import { default as usersRouter } from './scr/routers/users';
// app.use('/users', usersRouter);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.statusCode || 500).send("Error");
});

app.listen(config.API_PORT, err => {
  logger.info(`Server started at ${config.API_PORT}`);
});
