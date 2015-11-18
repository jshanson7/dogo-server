import { GraphQLObjectType } from 'graphql';
import { connectionArgs, connectionFromArray, globalIdField } from 'graphql-relay';
import { nodeInterface } from '../nodeDefinitions';
import { User, Shelter, Dog, Note } from 'models';
import { UserConnection } from './User';
import { ShelterConnection } from './Shelter';
import { DogConnection } from './Dog';
import { NoteConnection } from './Note';

export const AppType = new GraphQLObjectType({
  name: 'App',
  description: 'The Dogo Application',
  fields: () => ({
    id: globalIdField('App'),
    users: {
      type: UserConnection,
      description: 'App users',
      args: connectionArgs,
      resolve: async (_, args) => {
        return connectionFromArray((await User.getAll()).toJSON(), args);
      }
    },
    shelters: {
      type: ShelterConnection,
      description: 'App shelters',
      args: connectionArgs,
      resolve: async (_, args) => {
        return connectionFromArray((await Shelter.getAll()).toJSON(), args);
      }
    },
    dogs: {
      type: DogConnection,
      description: 'App dogs',
      args: connectionArgs,
      resolve: async (_, args) => {
        return connectionFromArray((await Dog.getAll()).toJSON(), args);
      }
    },
    notes: {
      type: NoteConnection,
      description: 'App notes',
      args: connectionArgs,
      resolve: async (_, args) => {
        return connectionFromArray((await Note.getAll()).toJSON(), args);
      }
    }
  }),
  interfaces: [nodeInterface]
});
