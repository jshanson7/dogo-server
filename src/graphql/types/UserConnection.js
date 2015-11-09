import { connectionDefinitions } from 'graphql-relay';
import User from './User';

export default connectionDefinitions({
  name: 'User',
  nodeType: User
}).connectionType;
