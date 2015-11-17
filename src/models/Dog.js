import Note from './Note';
import User from './User';
import Shelter from './Shelter';
import { createModel } from './utils';

export default createModel('Dog', {
  tableName: 'dogs',

  defaults: {
    name: null,
    description: null,
    breed: null,
    dot_color: null,
    shelter_id: null
  },

  notes() {
    return this.hasMany(Note);
  },

  shelter() {
    return this.belongsTo(Shelter);
  },

  users() {
    return this.belongsToMany(User).through(Note);
  }

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

  relations: ['shelter', 'notes', 'notes.author']
});
