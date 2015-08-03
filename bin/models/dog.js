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

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

exports['default'] = _base2['default'].extend({
  tableName: 'dogs',

  defaults: (0, _lodash.defaults)({
    name: null,
    description: null,
    breed: null,
    dot_color: null
  }, _base2['default'].prototype.defaults),

  notes: function notes() {
    return this.hasMany(_note2['default']);
  },

  users: function users() {
    return this.belongsToMany(_user2['default']).through(_note2['default']);
  }

}, {
  // rules: {
  //   name: ['required', 'minLength:1']
  // },
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
        'enum': ['red', 'yellow', 'green']
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
  searchable: ['name', 'description', 'breed', 'dot_color']
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7OztzQkFFWSxRQUFROztvQkFDaEIsUUFBUTs7OztvQkFDUixRQUFROzs7O29CQUNSLFFBQVE7Ozs7cUJBRVYsa0JBQUssTUFBTSxDQUFDO0FBQ3pCLFdBQVMsRUFBRSxNQUFNOztBQUVqQixVQUFRLEVBQUUsWUFSSCxRQUFRLEVBUUk7QUFDakIsUUFBSSxFQUFFLElBQUk7QUFDVixlQUFXLEVBQUUsSUFBSTtBQUNqQixTQUFLLEVBQUUsSUFBSTtBQUNYLGFBQVMsRUFBRSxJQUFJO0dBQ2hCLEVBQUUsa0JBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQzs7QUFFM0IsT0FBSyxFQUFFLGlCQUFXO0FBQ2hCLFdBQU8sSUFBSSxDQUFDLE9BQU8sbUJBQU0sQ0FBQztHQUMzQjs7QUFFRCxPQUFLLEVBQUUsaUJBQVc7QUFDaEIsV0FBTyxJQUFJLENBQUMsYUFBYSxtQkFBTSxDQUFDLE9BQU8sbUJBQU0sQ0FBQztHQUMvQzs7Q0FFRixFQUFFOzs7O0FBSUQsUUFBTSxFQUFFO0FBQ04sY0FBVSxFQUFFO0FBQ1YsVUFBSSxFQUFFO0FBQ0osZ0JBQVEsRUFBRSxJQUFJO0FBQ2QsWUFBSSxFQUFFLFFBQVE7QUFDZCxpQkFBUyxFQUFFLENBQUM7QUFDWixpQkFBUyxFQUFFLEVBQUU7T0FDZDtBQUNELGVBQVMsRUFBRTtBQUNULGdCQUFRLEVBQUUsSUFBSTtBQUNkLFlBQUksRUFBRSxRQUFRO0FBQ2QsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztPQUNqQztBQUNELGlCQUFXLEVBQUU7QUFDWCxZQUFJLEVBQUUsUUFBUTtBQUNkLGlCQUFTLEVBQUUsSUFBSTtPQUNoQjtBQUNELFdBQUssRUFBRTtBQUNMLFlBQUksRUFBRSxRQUFRO0FBQ2QsaUJBQVMsRUFBRSxFQUFFO09BQ2Q7S0FDRjtHQUNGO0FBQ0QsV0FBUyxFQUFFO0FBQ1QsU0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztBQUNoQyxZQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0dBQ3BDO0FBQ0QsWUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0NBQzFELENBQUMiLCJmaWxlIjoibW9kZWxzL2RvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlLmV4dGVuZCh7XG4gIHRhYmxlTmFtZTogJ2RvZ3MnLFxuICBcbiAgZGVmYXVsdHM6IGRlZmF1bHRzKHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgIGJyZWVkOiBudWxsLFxuICAgIGRvdF9jb2xvcjogbnVsbCxcbiAgfSwgQmFzZS5wcm90b3R5cGUuZGVmYXVsdHMpLFxuXG4gIG5vdGVzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNNYW55KE5vdGUpO1xuICB9LFxuXG4gIHVzZXJzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iZWxvbmdzVG9NYW55KFVzZXIpLnRocm91Z2goTm90ZSk7XG4gIH0sXG5cbn0sIHtcbiAgLy8gcnVsZXM6IHtcbiAgLy8gICBuYW1lOiBbJ3JlcXVpcmVkJywgJ21pbkxlbmd0aDoxJ11cbiAgLy8gfSxcbiAgc2NoZW1hOiB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgbmFtZToge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgbWF4TGVuZ3RoOiA3MFxuICAgICAgfSxcbiAgICAgIGRvdF9jb2xvcjoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGVudW06IFsncmVkJywgJ3llbGxvdycsICdncmVlbiddXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG1heExlbmd0aDogNTAwMFxuICAgICAgfSxcbiAgICAgIGJyZWVkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtYXhMZW5ndGg6IDcwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZWxhdGlvbnM6IHtcbiAgICBmZXRjaDogWydub3RlcycsICdub3Rlcy5hdXRob3InXSxcbiAgICBmZXRjaE9uZTogWydub3RlcycsICdub3Rlcy5hdXRob3InXVxuICB9LFxuICBzZWFyY2hhYmxlOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nLCAnYnJlZWQnLCAnZG90X2NvbG9yJ10sXG59KTtcbiJdfQ==