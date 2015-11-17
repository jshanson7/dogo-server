import { GraphQLObjectType } from 'graphql';
import App from './App';
import { nodeField } from '../nodeDefinitions';
import { getApp } from '../data';

export default new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: nodeField,
    app: {
      type: App,
      resolve: getApp,
    },
  }),
});
