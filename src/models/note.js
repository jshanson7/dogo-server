'use strict';

import { defaults } from 'lodash';
import Dog from './dog';
import User from './user';
import Base from './base';

export default Base.extend({
  tableName: 'notes',
  
  defaults: defaults({
    text: null,
    dog_id: null,
    user_id: null,
  }, Base.prototype.defaults),

  dog: function() {
    return this.belongsTo(Dog);
  },

  author: function() {
    return this.belongsTo(User);
  }

}, {
  schema: {
    properties: {
      text: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 5000
      },
      dog_id: {
        required: true,
        type: 'integer'
      },
      user_id: {
        required: true,
        type: 'integer'
      }
    }
  },
  relations: {
    fetch: ['dog', 'author'],
    fetchOne: ['dog', 'author']
  },
  searchable: ['text'],
});
