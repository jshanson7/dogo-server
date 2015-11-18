import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { getApp, getOne } from 'data';
import * as models from 'models';
import { App as AppType, User as UserType, Shelter as ShelterType } from './types';

const { App, User, Shelter } = models;

export const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    return type === 'App' ?
      await getApp() :
      await getOne(models[type], id);
  },
  (obj) => {
    console.log('obj', obj);
    switch (true) {
      case obj instanceof App: return AppType;
      case obj instanceof User: return UserType;
      case obj instanceof Shelter: return ShelterType;
      default: return null;
    }
  }
);
