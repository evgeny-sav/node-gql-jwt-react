import userQueries from '../queries/userQueries';
import messageQueries from '../queries/messageQueries';
import movieQueries from '../queries/movieQueries';
import personQueries from '../queries/personQueries';
import UserMutation from '../mutations/userMutattions';
import MessageMutation from '../mutations/messageMutations';
import userResolvers from './userResolvers';

const resolvers = {
  Query: {
    ...userQueries,
    ...messageQueries,
    ...movieQueries,
    ...personQueries,
  },
  Mutation: {
    ...UserMutation,
    ...MessageMutation,
  },
  User: {
    ...userResolvers,
  },
};

export default resolvers;
