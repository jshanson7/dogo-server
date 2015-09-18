import { defaults } from 'lodash';
import Base from './base';
import Note from './note';
import User from './user';

export default Base.extend({
  tableName: 'dogs',

  defaults: defaults({
    name: null,
    description: null,
    breed: null,
    dot_color: null,
  }, Base.prototype.defaults),

  notes: function () {
    return this.hasMany(Note);
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
      }
    }
  },
  relations: {
    fetch: ['notes', 'notes.author'],
    fetchOne: ['notes', 'notes.author']
  },
  searchable: ['name', 'description', 'breed', 'dot_color'],
});
