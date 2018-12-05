import userQueries from '../queries/userQueries';
import messageQueries from '../queries/messageQueries';
import UserMutation from '../mutations/userMutattions';
import MessageMutation from '../mutations/messageMutations';
import userResolvers from './userResolvers';

const resolvers = {
  Query: {
    ...userQueries,
    ...messageQueries,
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
