import { GraphQLSchema } from 'graphql';
import { Root as RootType } from './types';
import { Root as RootMutation } from './mutations';

export default new GraphQLSchema({
  query: RootType,
  mutation: RootMutation
});
