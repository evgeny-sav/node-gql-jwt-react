import userQueries from '../queries/userQueries';
import messageQueries from '../queries/messageQueries';
import movieQueries from '../queries/movieQueries';
import UserMutation from '../mutations/userMutattions';
import MessageMutation from '../mutations/messageMutations';
import userResolvers from './userResolvers';

const resolvers = {
  Query: {
    ...userQueries,
    ...messageQueries,
    ...movieQueries,
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
