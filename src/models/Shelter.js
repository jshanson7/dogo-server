import Dog from './Dog';
import { createModel } from './utils';

export default createModel('Shelter', {
  tableName: 'shelters',

  defaults: {
    name: null,
  },

  dogs() {
    return this.hasMany(Dog);
  }

}, {
  schema: {
    properties: {
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 70
      }
    }
  },

  restOptions: {
    relations: ['dogs'],
    searchableAttributes: ['name'],
    listParamDefaults: {
      searchBy: ['name'],
      withRelated: ['dogs']
    },
    showParamDefaults: {
      withRelated: ['dogs']
    }
  }
});
