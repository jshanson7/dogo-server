import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { User } from '../types';
import { getUser, createUser } from '../data';

export default mutationWithClientMutationId({
  name: 'AddUser',
  inputFields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    user: {
      type: User,
      resolve: (payload) => getUser(payload.id)
    }
  },
  mutateAndGetPayload: (user) => {
    return createUser(user);
  }
});
