import { GraphQLObjectType, GraphQLString } from 'graphql';
import {
  // connectionArgs,
  // connectionFromArray,
  globalIdField,
  connectionDefinitions
} from 'graphql-relay';
import Dog from 'models/Dog';
import { nodeInterface, typesByModel } from '../nodeDefinitions';

export const DogType = new GraphQLObjectType({
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

export const { connectionType: DogConnection } = connectionDefinitions({ name: 'Dog', nodeType: DogType });

typesByModel.set(Dog, DogType);
