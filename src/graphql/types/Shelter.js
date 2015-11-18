import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, connectionDefinitions } from 'graphql-relay';
import Shelter from 'models/Shelter';
import { nodeInterface, typesByModel } from '../nodeDefinitions';

export const ShelterType = new GraphQLObjectType({
  name: 'Shelter',
  description: 'A dog shelter',
  fields: () => ({
    id: globalIdField('Shelter'),
    name: {
      type: GraphQLString,
    }
  }),
  interfaces: [nodeInterface]
});

export const { connectionType: ShelterConnection } = connectionDefinitions({ name: 'Shelter', nodeType: ShelterType });

typesByModel.set(Shelter, ShelterType);
