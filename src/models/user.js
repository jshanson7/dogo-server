import Note from './note';
import Dog from './dog';
import createRestfulModel from './utils/createRestfulModel';

export default createRestfulModel('User', {
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
  },

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
  relations: {
    fetch: ['notes', 'notes.dog'],
    fetchOne: ['notes', 'notes.dog']
  },
  searchable: ['first_name', 'last_name'],

  // login: Promise.method(function(email, password) {
  //   if (!email || !password) throw new Error('Email and password are both required');
  //   return new this({email: email.toLowerCase().trim()}).fetch({require: true}).tap(function(customer) {
  //     return bcrypt.compareAsync(customer.get('password'), password);
  //   });
  // })

});
