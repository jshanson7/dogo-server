import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, connectionDefinitions } from 'graphql-relay';
import Note from 'models/Note';
import { nodeInterface, typesByModel } from '../nodeDefinitions';

console.log('hello note');
export const NoteType = new GraphQLObjectType({
  name: 'Note',
  description: 'A dog Note',
  fields: () => ({
    id: globalIdField('Note'),
    text: {
      type: GraphQLString,
    }
  }),
  interfaces: [nodeInterface]
});

export const { connectionType: NoteConnection } = connectionDefinitions({ name: 'Note', nodeType: NoteType });

typesByModel.set(Note, NoteType);
