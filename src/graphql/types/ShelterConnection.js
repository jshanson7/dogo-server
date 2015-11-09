import { connectionDefinitions } from 'graphql-relay';
import Shelter from './Shelter';

export default connectionDefinitions({
  name: 'Shelter',
  nodeType: Shelter
}).connectionType;
