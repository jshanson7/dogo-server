import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../nodeDefinitions';

export default new GraphQLObjectType({
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
