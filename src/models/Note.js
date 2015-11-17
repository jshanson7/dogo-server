import Dog from './Dog';
import User from './User';
import { createModel } from './utils';

export default createModel('Note', {
  tableName: 'notes',

  defaults: {
    text: null,
    dog_id: null,
    user_id: null,
  },

  dog() {
    return this.belongsTo(Dog);
  },

  author() {
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

  relations: ['dog', 'author']
});
