'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _note = require('./note');

var _note2 = _interopRequireDefault(_note);

var _dog = require('./dog');

var _dog2 = _interopRequireDefault(_dog);

exports['default'] = _base2['default'].extend({
  tableName: 'users',

  defaults: (0, _lodash.defaults)({
    first_name: null,
    last_name: null
  }, _base2['default'].prototype.defaults),

  notes: function notes() {
    return this.hasMany(_note2['default']);
  },

  dogs: function dogs() {
    return this.belongsToMany(_dog2['default']).through(_note2['default']);
  }

}, {
  // rules: {
  //   first_name: ['required', 'minLength:1'],
  //   last_name: ['required', 'minLength:1'],
  // },
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
  searchable: ['first_name', 'last_name']

});
module.exports = exports['default'];
// login: Promise.method(function(email, password) {
//   if (!email || !password) throw new Error('Email and password are both required');
//   return new this({email: email.toLowerCase().trim()}).fetch({require: true}).tap(function(customer) {
//     return bcrypt.compareAsync(customer.get('password'), password);
//   });
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7c0JBRVksUUFBUTs7b0JBQ2hCLFFBQVE7Ozs7b0JBQ1IsUUFBUTs7OzttQkFDVCxPQUFPOzs7O3FCQUVSLGtCQUFLLE1BQU0sQ0FBQztBQUN6QixXQUFTLEVBQUUsT0FBTzs7QUFFbEIsVUFBUSxFQUFFLFlBUkgsUUFBUSxFQVFJO0FBQ2pCLGNBQVUsRUFBRSxJQUFJO0FBQ2hCLGFBQVMsRUFBRSxJQUFJO0dBQ2hCLEVBQUUsa0JBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQzs7QUFFM0IsT0FBSyxFQUFFLGlCQUFXO0FBQ2hCLFdBQU8sSUFBSSxDQUFDLE9BQU8sbUJBQU0sQ0FBQztHQUMzQjs7QUFFRCxNQUFJLEVBQUUsZ0JBQVc7QUFDZixXQUFPLElBQUksQ0FBQyxhQUFhLGtCQUFLLENBQUMsT0FBTyxtQkFBTSxDQUFDO0dBQzlDOztDQUVGLEVBQUU7Ozs7O0FBS0QsUUFBTSxFQUFFO0FBQ04sY0FBVSxFQUFFO0FBQ1YsZ0JBQVUsRUFBRTtBQUNWLGdCQUFRLEVBQUUsSUFBSTtBQUNkLFlBQUksRUFBRSxRQUFRO0FBQ2QsaUJBQVMsRUFBRSxDQUFDO0FBQ1osaUJBQVMsRUFBRSxFQUFFO09BQ2Q7QUFDRCxlQUFTLEVBQUU7QUFDVCxnQkFBUSxFQUFFLElBQUk7QUFDZCxZQUFJLEVBQUUsUUFBUTtBQUNkLGlCQUFTLEVBQUUsQ0FBQztBQUNaLGlCQUFTLEVBQUUsRUFBRTtPQUNkO0tBQ0Y7R0FDRjtBQUNELFdBQVMsRUFBRTtBQUNULFNBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7QUFDN0IsWUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztHQUNqQztBQUNELFlBQVUsRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7O0NBU3hDLENBQUMiLCJmaWxlIjoibW9kZWxzL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IERvZyBmcm9tICcuL2RvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2UuZXh0ZW5kKHtcbiAgdGFibGVOYW1lOiAndXNlcnMnLFxuICBcbiAgZGVmYXVsdHM6IGRlZmF1bHRzKHtcbiAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgfSwgQmFzZS5wcm90b3R5cGUuZGVmYXVsdHMpLFxuXG4gIG5vdGVzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNNYW55KE5vdGUpO1xuICB9LFxuXG4gIGRvZ3M6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJlbG9uZ3NUb01hbnkoRG9nKS50aHJvdWdoKE5vdGUpO1xuICB9LFxuXG59LCB7XG4gIC8vIHJ1bGVzOiB7XG4gIC8vICAgZmlyc3RfbmFtZTogWydyZXF1aXJlZCcsICdtaW5MZW5ndGg6MSddLFxuICAvLyAgIGxhc3RfbmFtZTogWydyZXF1aXJlZCcsICdtaW5MZW5ndGg6MSddLFxuICAvLyB9LFxuICBzY2hlbWE6IHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBmaXJzdF9uYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICBtYXhMZW5ndGg6IDM1XG4gICAgICB9LFxuICAgICAgbGFzdF9uYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICBtYXhMZW5ndGg6IDM1XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZWxhdGlvbnM6IHtcbiAgICBmZXRjaDogWydub3RlcycsICdub3Rlcy5kb2cnXSxcbiAgICBmZXRjaE9uZTogWydub3RlcycsICdub3Rlcy5kb2cnXVxuICB9LFxuICBzZWFyY2hhYmxlOiBbJ2ZpcnN0X25hbWUnLCAnbGFzdF9uYW1lJ10sXG5cbiAgLy8gbG9naW46IFByb21pc2UubWV0aG9kKGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAvLyAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGFuZCBwYXNzd29yZCBhcmUgYm90aCByZXF1aXJlZCcpO1xuICAvLyAgIHJldHVybiBuZXcgdGhpcyh7ZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpfSkuZmV0Y2goe3JlcXVpcmU6IHRydWV9KS50YXAoZnVuY3Rpb24oY3VzdG9tZXIpIHtcbiAgLy8gICAgIHJldHVybiBiY3J5cHQuY29tcGFyZUFzeW5jKGN1c3RvbWVyLmdldCgncGFzc3dvcmQnKSwgcGFzc3dvcmQpO1xuICAvLyAgIH0pO1xuICAvLyB9KVxuXG59KTsiXX0=