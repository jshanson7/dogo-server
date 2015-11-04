import { GraphQLObjectType, GraphQLString } from 'graphql';
import {
  // connectionArgs,
  // connectionFromArray,
  globalIdField
} from 'graphql-relay';
import { nodeInterface } from '../nodeDefinitions';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),
    first_name: {
      type: GraphQLString,
    },
    last_name: {
      type: GraphQLString,
    },
    // notes: {
    //   type: NotesConnection,
    //   args: connectionArgs,
    //   resolve: (obj, args) => connectionFromArray(getNotes(), args),
    // }
  }),
  interfaces: [nodeInterface]
});
