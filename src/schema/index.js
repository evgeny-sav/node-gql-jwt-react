import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefinitions';
import resolvers from './resolvers';

//todo: signup mutation
const GQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default GQLSchema;
