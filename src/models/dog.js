import { defaults } from 'lodash';
import Base from './base';
import Note from './note';
import User from './user';
import Shelter from './shelter';

export default Base.extend({
  tableName: 'dogs',

  defaults: defaults({
    name: null,
    description: null,
    breed: null,
    dot_color: null,
    shelter_id: null
  }, Base.prototype.defaults),

  notes: function () {
    return this.hasMany(Note);
  },

  shelter: function () {
    return this.belongsTo(Shelter);
  },

  users: function () {
    return this.belongsToMany(User).through(Note);
  },

}, {
  schema: {
    properties: {
      name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 70
      },
      dot_color: {
        required: true,
        type: 'string',
        enum: ['red', 'yellow', 'green']
      },
      description: {
        type: 'string',
        maxLength: 5000
      },
      breed: {
        type: 'string',
        maxLength: 70
      },
      shelter_id: {
        required: true,
        type: 'integer'
      },
    }
  },
  relations: {
    fetch: ['shelter', 'notes', 'notes.author'],
    fetchOne: ['shelter', 'notes', 'notes.author']
  },
  searchable: ['name', 'description', 'breed', 'dot_color'],
});
