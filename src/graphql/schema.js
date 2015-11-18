import { GraphQLSchema } from 'graphql';
import { RootType as query } from './types/Root';
import { RootMutation as mutation } from './mutations/Root';

export default new GraphQLSchema({ query, mutation });
