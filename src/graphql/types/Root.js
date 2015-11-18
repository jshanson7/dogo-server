import { GraphQLObjectType } from 'graphql';
import { AppType } from './App';
import { nodeField } from '../nodeDefinitions';

const app = {};

export const RootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: nodeField,
    app: {
      type: AppType,
      resolve: () => app,
    },
  }),
});
