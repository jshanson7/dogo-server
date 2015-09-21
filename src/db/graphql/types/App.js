import { GraphQLObjectType } from 'graphql';
import { connectionArgs, connectionFromArray, globalIdField } from 'graphql-relay';
import ShelterConnection from './ShelterConnection';
import UserConnection from './UserConnection';
import { nodeInterface } from '../nodeDefinitions';
import { getUsers, getShelters } from '../database';

export default new GraphQLObjectType({
  name: 'App',
  description: 'The Dogo Application',
  fields: () => ({
    id: globalIdField('App'),
    users: {
      type: UserConnection,
      description: 'App users',
      args: connectionArgs,
      resolve: async (_, args) => {
        return connectionFromArray(await getUsers(), args);
      },
    },
    shelters: {
      type: ShelterConnection,
      description: 'App shelters',
      args: connectionArgs,
      resolve: async (_, args) => {
        return connectionFromArray(await getShelters(), args);
      },
    },
  }),
  interfaces: [nodeInterface]
});
