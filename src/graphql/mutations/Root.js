import { GraphQLObjectType } from 'graphql';
import { AddUser } from './AddUser';

export const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: AddUser
  }
});
