import { GraphQLSchema } from 'graphql';
import RootType from './types/Root';
import RootMutation from './mutations/Root';

export default new GraphQLSchema({
  query: RootType,
  mutation: RootMutation
});
