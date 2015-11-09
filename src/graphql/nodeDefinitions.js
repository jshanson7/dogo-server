import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import db from './database';
import types from './types';

export const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    switch (type) {
      case 'App': return await db.getApp();
      case 'User': return await db.getUser(id);
      case 'Shelter': return await db.getShelter(id);
      default: return null;
    }
  },
  (obj) => ({
    [obj instanceof db.App]: types.App,
    [obj instanceof db.User]: types.User,
    [obj instanceof db.Shelter]: types.Shelter
  }[true])
);
