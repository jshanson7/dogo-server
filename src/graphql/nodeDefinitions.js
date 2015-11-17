import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import data from './data';
import types from './types';

export const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    switch (type) {
      case 'App': return await data.getApp();
      case 'User': return await data.getUser(id);
      case 'Shelter': return await data.getShelter(id);
      default: return null;
    }
  },
  (obj) => ({
    [obj instanceof data.App]: types.App,
    [obj instanceof data.User]: types.User,
    [obj instanceof data.Shelter]: types.Shelter
  }[true])
);
