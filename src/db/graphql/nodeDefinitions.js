import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  App,
  User,
  Shelter,
  getApp,
  getUser,
  getShelter,
} from './database';

export const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    switch (type) {
      case 'App': return await getApp();
      case 'User': return await getUser(id);
      case 'Shelter': return await getShelter(id);
      default: return null;
    }
  },
  (obj) => ({
    [obj instanceof App]: require('./types/App'),
    [obj instanceof User]: require('./types/User'),
    [obj instanceof Shelter]: require('./types/Shelter')
  }[true])
);
