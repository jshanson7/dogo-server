import { GraphQLObjectType, GraphQLString } from 'graphql';
import {
  // connectionArgs,
  // connectionFromArray,
  globalIdField
} from 'graphql-relay';
import { nodeInterface } from '../nodeDefinitions';

export default new GraphQLObjectType({
  name: 'Dog',
  description: 'A dog.',
  fields: () => ({
    id: globalIdField('Dog'),
    name: {
      type: GraphQLString,
    }
    // notes: {
    //   type: NotesConnection,
    //   args: connectionArgs,
    //   resolve: (obj, args) => connectionFromArray(getNotes(), args),
    // }
  }),
  interfaces: [nodeInterface]
});
