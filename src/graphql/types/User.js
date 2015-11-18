import { GraphQLObjectType, GraphQLString } from 'graphql';
import {
  // connectionArgs,
  // connectionFromArray,
  globalIdField,
  connectionDefinitions
} from 'graphql-relay';
import User from 'models/User';
import { nodeInterface, typesByModel } from '../nodeDefinitions';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => {
    return {
      id: globalIdField('User'),
      first_name: {
        type: GraphQLString
      },
      last_name: {
        type: GraphQLString
      }
      // notes: {
      //   type: NotesConnection,
      //   args: connectionArgs,
      //   resolve: (obj, args) => connectionFromArray(getNotes(), args),
      // }
    };
  },
  interfaces: [nodeInterface]
});

export const { connectionType: UserConnection } = connectionDefinitions({ name: 'User', nodeType: UserType });

typesByModel.set(User, UserType);
