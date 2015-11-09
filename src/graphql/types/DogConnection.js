import { connectionDefinitions } from 'graphql-relay';
import Dog from './Dog';

export default connectionDefinitions({
  name: 'Dog',
  nodeType: Dog
}).connectionType;
