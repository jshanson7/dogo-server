import { GraphQLObjectType } from 'graphql';
import AddUser from './AddUser';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: AddUser
  }
});
