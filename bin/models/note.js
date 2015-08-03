'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _dog = require('./dog');

var _dog2 = _interopRequireDefault(_dog);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

exports['default'] = _base2['default'].extend({
  tableName: 'notes',

  defaults: (0, _lodash.defaults)({
    text: null,
    dog_id: null,
    user_id: null
  }, _base2['default'].prototype.defaults),

  dog: function dog() {
    return this.belongsTo(_dog2['default']);
  },

  author: function author() {
    return this.belongsTo(_user2['default']);
  }

}, {
  // rules: {
  //   text: ['required', 'minLength:1', 'maxLength:140'],
  //   dog_id: ['required', 'integer'],
  //   user_id: ['required', 'integer'],
  // },
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
  searchable: ['text']
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9ub3RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7c0JBRVksUUFBUTs7bUJBQ2pCLE9BQU87Ozs7b0JBQ04sUUFBUTs7OztvQkFDUixRQUFROzs7O3FCQUVWLGtCQUFLLE1BQU0sQ0FBQztBQUN6QixXQUFTLEVBQUUsT0FBTzs7QUFFbEIsVUFBUSxFQUFFLFlBUkgsUUFBUSxFQVFJO0FBQ2pCLFFBQUksRUFBRSxJQUFJO0FBQ1YsVUFBTSxFQUFFLElBQUk7QUFDWixXQUFPLEVBQUUsSUFBSTtHQUNkLEVBQUUsa0JBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQzs7QUFFM0IsS0FBRyxFQUFFLGVBQVc7QUFDZCxXQUFPLElBQUksQ0FBQyxTQUFTLGtCQUFLLENBQUM7R0FDNUI7O0FBRUQsUUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFdBQU8sSUFBSSxDQUFDLFNBQVMsbUJBQU0sQ0FBQztHQUM3Qjs7Q0FFRixFQUFFOzs7Ozs7QUFNRCxRQUFNLEVBQUU7QUFDTixjQUFVLEVBQUU7QUFDVixVQUFJLEVBQUU7QUFDSixnQkFBUSxFQUFFLElBQUk7QUFDZCxZQUFJLEVBQUUsUUFBUTtBQUNkLGlCQUFTLEVBQUUsQ0FBQztBQUNaLGlCQUFTLEVBQUUsSUFBSTtPQUNoQjtBQUNELFlBQU0sRUFBRTtBQUNOLGdCQUFRLEVBQUUsSUFBSTtBQUNkLFlBQUksRUFBRSxTQUFTO09BQ2hCO0FBQ0QsYUFBTyxFQUFFO0FBQ1AsZ0JBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBSSxFQUFFLFNBQVM7T0FDaEI7S0FDRjtHQUNGO0FBQ0QsV0FBUyxFQUFFO0FBQ1QsU0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUN4QixZQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0dBQzVCO0FBQ0QsWUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO0NBQ3JCLENBQUMiLCJmaWxlIjoibW9kZWxzL25vdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBEb2cgZnJvbSAnLi9kb2cnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2UuZXh0ZW5kKHtcbiAgdGFibGVOYW1lOiAnbm90ZXMnLFxuICBcbiAgZGVmYXVsdHM6IGRlZmF1bHRzKHtcbiAgICB0ZXh0OiBudWxsLFxuICAgIGRvZ19pZDogbnVsbCxcbiAgICB1c2VyX2lkOiBudWxsLFxuICB9LCBCYXNlLnByb3RvdHlwZS5kZWZhdWx0cyksXG5cbiAgZG9nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iZWxvbmdzVG8oRG9nKTtcbiAgfSxcblxuICBhdXRob3I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJlbG9uZ3NUbyhVc2VyKTtcbiAgfVxuXG59LCB7XG4gIC8vIHJ1bGVzOiB7XG4gIC8vICAgdGV4dDogWydyZXF1aXJlZCcsICdtaW5MZW5ndGg6MScsICdtYXhMZW5ndGg6MTQwJ10sXG4gIC8vICAgZG9nX2lkOiBbJ3JlcXVpcmVkJywgJ2ludGVnZXInXSxcbiAgLy8gICB1c2VyX2lkOiBbJ3JlcXVpcmVkJywgJ2ludGVnZXInXSxcbiAgLy8gfSxcbiAgc2NoZW1hOiB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgdGV4dDoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgbWF4TGVuZ3RoOiA1MDAwXG4gICAgICB9LFxuICAgICAgZG9nX2lkOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgIH0sXG4gICAgICB1c2VyX2lkOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbGF0aW9uczoge1xuICAgIGZldGNoOiBbJ2RvZycsICdhdXRob3InXSxcbiAgICBmZXRjaE9uZTogWydkb2cnLCAnYXV0aG9yJ11cbiAgfSxcbiAgc2VhcmNoYWJsZTogWyd0ZXh0J10sXG59KTtcbiJdfQ==