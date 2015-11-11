import Note from './Note';
import Dog from './Dog';
import { createModel } from './utils';

export default createModel('User', {
  tableName: 'users',

  defaults: {
    first_name: null,
    last_name: null,
  },

  notes() {
    return this.hasMany(Note);
  },

  dogs() {
    return this.belongsToMany(Dog).through(Note);
  }

}, {
  schema: {
    properties: {
      first_name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 35
      },
      last_name: {
        required: true,
        type: 'string',
        minLength: 1,
        maxLength: 35
      }
    }
  },

  restOptions: {
    relations: ['notes', 'notes.dog'],
    searchableAttributes: ['first_name', 'last_name'],
    listParamDefaults: {
      searchBy: ['first_name', 'last_name'],
      withRelated: ['notes', 'notes.dog']
    },
    showParamDefaults: {
      withRelated: ['notes', 'notes.dog']
    }
  }

  // login: Promise.method(function(email, password) {
  //   if (!email || !password) throw new Error('Email and password are both required');
  //   return new this({email: email.toLowerCase().trim()}).fetch({require: true}).tap(function(customer) {
  //     return bcrypt.compareAsync(customer.get('password'), password);
  //   });
  // })

});
