import Dog from './dog';
import createRestfulModel from './utils/createRestfulModel';

export default createRestfulModel('Shelter', {
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
  relations: {
    fetch: ['dogs'],
    fetchOne: ['dogs']
  },
  searchable: ['name'],

});
