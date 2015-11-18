import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import * as models from 'models';

export const typesByModel = new Map();

export const { nodeInterface, nodeField } = nodeDefinitions(
  async function getInstanceForGlobalId(globalId) {
    console.log('getInstanceForGlobalId', arguments);
    const { type, id } = fromGlobalId(globalId);
    const Model = models[type];
    return Model ? await Model.get(id) : null;
  },
  function getTypeForInstance(instance) {
    console.log('getTypeForInstance', arguments);
    for (let Model of models) {
      if (instance instanceof Model) {
        return typesByModel.get(Model);
      }
    }
    return null;
  }
);
