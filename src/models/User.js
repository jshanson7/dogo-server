import Note from './Note';
import Dog from './Dog';
import { createModel } from './utils';

export default createModel({
  prototypeProps: {
    tableName: 'users',
    defaults: {
      first_name: null,
      last_name: null,
    },
    notes() { return this.hasMany(Note); },
    dogs() { return this.belongsToMany(Dog).through(Note); }
  },
  classProps: {
    Name: 'User',
    relations: ['notes', 'notes.dog'],
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
    }
    // login: Promise.method(function(email, password) {
    //   if (!email || !password) throw new Error('Email and password are both required');
    //   return new this({email: email.toLowerCase().trim()}).fetch({require: true}).tap(function(customer) {
    //     return bcrypt.compareAsync(customer.get('password'), password);
    //   });
    // })
  }
});
