import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserType } from '../types/User';
import User from 'models/User';

export const AddUser = mutationWithClientMutationId({
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
      type: UserType,
      resolve: async (payload) => await User.get(payload.id)
    }
  },
  mutateAndGetPayload: async (data) => await User.create(data)
});
