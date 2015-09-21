import { defaults } from 'lodash';
import Base from './base';
import Dog from './dog';

export default Base.extend({
  tableName: 'shelters',

  defaults: defaults({
    name: null,
  }, Base.prototype.defaults),

  dogs: function () {
    return this.hasMany(Dog);
  },

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
