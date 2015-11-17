import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import {
  getApp,
  getUser,
  getShelter,
  App,
  User,
  Shelter
} from './data';
import {
  App as AppType,
  User as UserType,
  Shelter as ShelterType
} from './types';

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
    [obj instanceof App]: AppType,
    [obj instanceof User]: UserType,
    [obj instanceof Shelter]: ShelterType
  }[true])
);
