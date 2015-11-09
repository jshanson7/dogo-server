import { GraphQLSchema } from 'graphql';
import { Root as query } from './types';
import { Root as mutation } from './mutations';

export default new GraphQLSchema({ query, mutation });
