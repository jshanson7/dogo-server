'use strict';

// import Checkit from 'checkit';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _verror = require('verror');

var _verror2 = _interopRequireDefault(_verror);

var _lodash = require('lodash');

var _utilsValidate = require('../utils/validate');

var _utilsValidate2 = _interopRequireDefault(_utilsValidate);

var _dbBookshelf = require('../db/bookshelf');

var _dbBookshelf2 = _interopRequireDefault(_dbBookshelf);

exports['default'] = _dbBookshelf2['default'].Model.extend({
  hasTimestamps: ['created_at', 'updated_at'],

  defaults: {
    created_at: null,
    updated_at: null
  },

  initialize: function initialize() {
    this.on('saving', this.validateSave);
  },

  validateSave: function validateSave() {
    // return new Checkit(this.constructor.rules)
    //   .run(this.attributes);

    return (0, _utilsValidate2['default'])(this.attributes, (0, _lodash.result)(this.constructor, 'schema'));
  }

}, {
  schema: {},
  relations: {
    fetch: [],
    fetchOne: []
  },
  searchable: [],

  fetch: function fetch(params) {
    var _this = this;

    return (0, _utilsValidate2['default'])(params, (0, _lodash.result)(this, 'fetchParamsSchema'), { cast: true })['catch'](function (e) {
      throw new _verror2['default'](e, 'invalid fetch params');
    }).then(function () {
      var config = (0, _lodash.defaults)({}, params, (0, _lodash.result)(_this, 'fetchParamsDefaults'));
      var searchTerm = (0, _lodash.has)(config, 'search') ? '%' + config.search + '%' : null;
      return new _this().query(function (qb) {
        qb.orderBy(config.orderBy, config.direction);
        qb.offset(config.offset);
        if (searchTerm) {
          config.searchBy.forEach(function (attribute) {
            return qb.orWhere(attribute, 'ilike', searchTerm);
          });
        }
        qb.limit(config.limit);
      }).fetchAll({ withRelated: config.withRelated });
    });
  },

  fetchOne: function fetchOne(params) {
    var _this2 = this;

    return (0, _utilsValidate2['default'])(params, (0, _lodash.result)(this, 'fetchOneParamsSchema'), { cast: true })['catch'](function (e) {
      throw new _verror2['default'](e, 'invalid fetchOne params');
    }).then(function () {
      var config = (0, _lodash.defaults)({}, params, (0, _lodash.result)(_this2, 'fetchOneParamsDefaults'));
      return new _this2({ id: config.id }).fetch({ withRelated: config.withRelated });
    });
  },

  create: function create(params) {
    return new this().save(params, { method: 'insert' })['catch'](function (e) {
      throw new _verror2['default'](e, 'invalid create params');
    });
  },

  fetchParamsSchema: function fetchParamsSchema() {
    var _this3 = this;

    var attributes = (0, _lodash.keys)(this.prototype.defaults);
    var directions = ['asc', 'desc'];
    var related = this.relations.fetch;
    return {
      'properties': {
        'orderBy': {
          type: 'string',
          'enum': attributes,
          message: 'must be one of [' + attributes.join(', ') + ']'
        },
        'direction': {
          type: 'string',
          'enum': directions,
          message: 'must be one of [' + directions.join(', ') + ']'
        },
        'limit': {
          type: 'integer',
          minimum: 0,
          maximum: 100
        },
        'offset': {
          type: 'integer',
          minimum: 0
        },
        'withRelated': {
          type: 'array',
          conform: function conform(value) {
            return (0, _lodash.difference)(value, related).length === 0;
          },
          messages: {
            conform: 'must be a subset of [' + related.join(', ') + ']'
          }
        },
        'search': {
          type: 'string',
          minLength: 0,
          maxLength: 70
        },
        'searchBy': {
          type: 'array',
          dependencies: 'search',
          conform: function conform(value) {
            return (0, _lodash.difference)(value, _this3.searchable).length === 0;
          },
          messages: {
            dependencies: 'search must also be present',
            conform: 'must be a subset of [' + this.searchable.join(', ') + ']'
          }
        }
      }
    };
  },

  fetchParamsDefaults: function fetchParamsDefaults() {
    return {
      orderBy: 'updated_at',
      direction: 'desc',
      limit: 20,
      offset: 0,
      searchBy: this.searchable,
      withRelated: this.relations.fetch
    };
  },

  fetchOneParamsSchema: function fetchOneParamsSchema() {
    var related = this.relations.fetchOne;
    return {
      'properties': {
        'id': {
          required: true,
          type: 'integer'
        },
        'withRelated': {
          type: 'array',
          conform: function conform(v) {
            return (0, _lodash.difference)(v, related).length === 0;
          },
          messages: {
            conform: 'must be a subset of [' + related.join(', ') + ']'
          }
        }
      }
    };
  },

  fetchOneParamsDefaults: function fetchOneParamsDefaults() {
    return {
      withRelated: this.relations.fetchOne
    };
  }

});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztzQkFHTSxRQUFROzs7O3NCQUM2QixRQUFROzs2QkFDM0MsbUJBQW1COzs7OzJCQUNsQixpQkFBaUI7Ozs7cUJBRXhCLHlCQUFVLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDcEMsZUFBYSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzs7QUFFM0MsVUFBUSxFQUFFO0FBQ1IsY0FBVSxFQUFFLElBQUk7QUFDaEIsY0FBVSxFQUFFLElBQUk7R0FDakI7O0FBRUQsWUFBVSxFQUFBLHNCQUFHO0FBQ1gsUUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ3RDOztBQUVELGNBQVksRUFBQSx3QkFBRzs7OztBQUliLFdBQU8sZ0NBQVMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQXBCTCxNQUFNLEVBb0JNLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztHQUN0RTs7Q0FFRixFQUFFO0FBQ0QsUUFBTSxFQUFFLEVBQUU7QUFDVixXQUFTLEVBQUU7QUFDVCxTQUFLLEVBQUUsRUFBRTtBQUNULFlBQVEsRUFBRSxFQUFFO0dBQ2I7QUFDRCxZQUFVLEVBQUUsRUFBRTs7QUFFZCxPQUFLLEVBQUEsZUFBQyxNQUFNLEVBQUU7OztBQUNaLFdBQU8sZ0NBQVMsTUFBTSxFQUFFLFlBaENJLE1BQU0sRUFnQ0gsSUFBSSxFQUFFLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FDbEUsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUFFLFlBQU0sd0JBQVcsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7S0FBRSxDQUFDLENBQzVELElBQUksQ0FBQyxZQUFNO0FBQ1YsVUFBTSxNQUFNLEdBQUcsWUFuQ2lCLFFBQVEsRUFtQ2hCLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFuQ1osTUFBTSxTQW1DbUIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLFVBQU0sVUFBVSxHQUFHLFlBcENaLEdBQUcsRUFvQ2EsTUFBTSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDNUUsYUFBTyxXQUFVLENBQ2QsS0FBSyxDQUFDLFVBQUEsRUFBRSxFQUFJO0FBQ1gsVUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxVQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixZQUFJLFVBQVUsRUFBRTtBQUNkLGdCQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7bUJBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztXQUFBLENBQUMsQ0FBQztTQUNsRjtBQUNELFVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3hCLENBQUMsQ0FDRCxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDbEQsQ0FBQyxDQUFDO0dBQ047O0FBRUQsVUFBUSxFQUFBLGtCQUFDLE1BQU0sRUFBRTs7O0FBQ2YsV0FBTyxnQ0FBUyxNQUFNLEVBQUUsWUFuREksTUFBTSxFQW1ESCxJQUFJLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUNyRSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQUUsWUFBTSx3QkFBVyxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FDL0QsSUFBSSxDQUFDLFlBQU07QUFDVixVQUFNLE1BQU0sR0FBRyxZQXREaUIsUUFBUSxFQXNEaEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQXREWixNQUFNLFVBc0RtQix3QkFBd0IsQ0FBQyxDQUFDLENBQUM7QUFDNUUsYUFBTyxXQUFTLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUMvQixLQUFLLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDL0MsQ0FBQyxDQUFDO0dBQ047O0FBRUQsUUFBTSxFQUFBLGdCQUFDLE1BQU0sRUFBRTtBQUNiLFdBQU8sSUFBSSxJQUFJLEVBQUUsQ0FDZCxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLFNBQzdCLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFBRSxZQUFNLHdCQUFXLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0tBQUUsQ0FBQyxDQUFDO0dBQ2xFOztBQUVELG1CQUFpQixFQUFBLDZCQUFHOzs7QUFDbEIsUUFBTSxVQUFVLEdBQUcsWUFuRWQsSUFBSSxFQW1FZSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELFFBQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLFFBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ3JDLFdBQU87QUFDTCxrQkFBWSxFQUFFO0FBQ1osaUJBQVMsRUFBRTtBQUNULGNBQUksRUFBRSxRQUFRO0FBQ2Qsa0JBQU0sVUFBVTtBQUNoQixpQkFBTyxFQUFFLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRztTQUMxRDtBQUNELG1CQUFXLEVBQUU7QUFDWCxjQUFJLEVBQUUsUUFBUTtBQUNkLGtCQUFNLFVBQVU7QUFDaEIsaUJBQU8sRUFBRSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7U0FDMUQ7QUFDRCxlQUFPLEVBQUU7QUFDUCxjQUFJLEVBQUUsU0FBUztBQUNmLGlCQUFPLEVBQUUsQ0FBQztBQUNWLGlCQUFPLEVBQUUsR0FBRztTQUNiO0FBQ0QsZ0JBQVEsRUFBRTtBQUNSLGNBQUksRUFBRSxTQUFTO0FBQ2YsaUJBQU8sRUFBRSxDQUFDO1NBQ1g7QUFDRCxxQkFBYSxFQUFFO0FBQ2IsY0FBSSxFQUFFLE9BQU87QUFDYixpQkFBTyxFQUFFLGlCQUFBLEtBQUs7bUJBQUksWUE3RlIsVUFBVSxFQTZGUyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7V0FBQTtBQUN6RCxrQkFBUSxFQUFFO0FBQ1IsbUJBQU8sRUFBRSx1QkFBdUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7V0FDNUQ7U0FDRjtBQUNELGdCQUFRLEVBQUU7QUFDUixjQUFJLEVBQUUsUUFBUTtBQUNkLG1CQUFTLEVBQUUsQ0FBQztBQUNaLG1CQUFTLEVBQUUsRUFBRTtTQUNkO0FBQ0Qsa0JBQVUsRUFBRTtBQUNWLGNBQUksRUFBRSxPQUFPO0FBQ2Isc0JBQVksRUFBRSxRQUFRO0FBQ3RCLGlCQUFPLEVBQUUsaUJBQUEsS0FBSzttQkFBSSxZQTFHUixVQUFVLEVBMEdTLEtBQUssRUFBRSxPQUFLLFVBQVUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1dBQUE7QUFDakUsa0JBQVEsRUFBRTtBQUNSLHdCQUFZLEVBQUUsNkJBQTZCO0FBQzNDLG1CQUFPLEVBQUUsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRztXQUNwRTtTQUNGO09BQ0Y7S0FDRixDQUFDO0dBQ0g7O0FBRUQscUJBQW1CLEVBQUEsK0JBQUc7QUFDcEIsV0FBTztBQUNMLGFBQU8sRUFBRSxZQUFZO0FBQ3JCLGVBQVMsRUFBRSxNQUFNO0FBQ2pCLFdBQUssRUFBRSxFQUFFO0FBQ1QsWUFBTSxFQUFFLENBQUM7QUFDVCxjQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVU7QUFDekIsaUJBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7S0FDbEMsQ0FBQztHQUNIOztBQUVELHNCQUFvQixFQUFBLGdDQUFHO0FBQ3JCLFFBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ3hDLFdBQU87QUFDTCxrQkFBWSxFQUFFO0FBQ1osWUFBSSxFQUFFO0FBQ0osa0JBQVEsRUFBRSxJQUFJO0FBQ2QsY0FBSSxFQUFFLFNBQVM7U0FDaEI7QUFDRCxxQkFBYSxFQUFFO0FBQ2IsY0FBSSxFQUFFLE9BQU87QUFDYixpQkFBTyxFQUFFLGlCQUFBLENBQUM7bUJBQUksWUF6SUosVUFBVSxFQXlJSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7V0FBQTtBQUNqRCxrQkFBUSxFQUFFO0FBQ1IsbUJBQU8sRUFBRSx1QkFBdUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7V0FDNUQ7U0FDRjtPQUNGO0tBQ0YsQ0FBQztHQUNIOztBQUVELHdCQUFzQixFQUFBLGtDQUFHO0FBQ3ZCLFdBQU87QUFDTCxpQkFBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtLQUNyQyxDQUFDO0dBQ0g7O0NBRUYsQ0FBQyIsImZpbGUiOiJtb2RlbHMvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IENoZWNraXQgZnJvbSAnY2hlY2tpdCc7XG5pbXBvcnQgVkVycm9yIGZyb20gJ3ZlcnJvcic7XG5pbXBvcnQgeyBrZXlzLCBoYXMsIGRpZmZlcmVuY2UsIHJlc3VsdCwgZGVmYXVsdHMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRlJztcbmltcG9ydCBib29rc2hlbGYgZnJvbSAnLi4vZGIvYm9va3NoZWxmJztcblxuZXhwb3J0IGRlZmF1bHQgYm9va3NoZWxmLk1vZGVsLmV4dGVuZCh7XG4gIGhhc1RpbWVzdGFtcHM6IFsnY3JlYXRlZF9hdCcsICd1cGRhdGVkX2F0J10sXG5cbiAgZGVmYXVsdHM6IHtcbiAgICBjcmVhdGVkX2F0OiBudWxsLFxuICAgIHVwZGF0ZWRfYXQ6IG51bGwsXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLm9uKCdzYXZpbmcnLCB0aGlzLnZhbGlkYXRlU2F2ZSk7XG4gIH0sXG5cbiAgdmFsaWRhdGVTYXZlKCkge1xuICAgIC8vIHJldHVybiBuZXcgQ2hlY2tpdCh0aGlzLmNvbnN0cnVjdG9yLnJ1bGVzKVxuICAgIC8vICAgLnJ1bih0aGlzLmF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMuYXR0cmlidXRlcywgcmVzdWx0KHRoaXMuY29uc3RydWN0b3IsICdzY2hlbWEnKSk7XG4gIH1cblxufSwge1xuICBzY2hlbWE6IHt9LFxuICByZWxhdGlvbnM6IHtcbiAgICBmZXRjaDogW10sXG4gICAgZmV0Y2hPbmU6IFtdXG4gIH0sXG4gIHNlYXJjaGFibGU6IFtdLFxuXG4gIGZldGNoKHBhcmFtcykge1xuICAgIHJldHVybiB2YWxpZGF0ZShwYXJhbXMsIHJlc3VsdCh0aGlzLCAnZmV0Y2hQYXJhbXNTY2hlbWEnKSwgeyBjYXN0OiB0cnVlIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7IHRocm93IG5ldyBWRXJyb3IoZSwgJ2ludmFsaWQgZmV0Y2ggcGFyYW1zJyk7IH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGRlZmF1bHRzKHt9LCBwYXJhbXMsIHJlc3VsdCh0aGlzLCAnZmV0Y2hQYXJhbXNEZWZhdWx0cycpKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IGhhcyhjb25maWcsICdzZWFyY2gnKSA/ICclJyArIGNvbmZpZy5zZWFyY2ggKyAnJScgOiBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoKVxuICAgICAgICAgIC5xdWVyeShxYiA9PiB7XG4gICAgICAgICAgICBxYi5vcmRlckJ5KGNvbmZpZy5vcmRlckJ5LCBjb25maWcuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHFiLm9mZnNldChjb25maWcub2Zmc2V0KTtcbiAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICAgIGNvbmZpZy5zZWFyY2hCeS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiBxYi5vcldoZXJlKGF0dHJpYnV0ZSwgJ2lsaWtlJywgc2VhcmNoVGVybSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcWIubGltaXQoY29uZmlnLmxpbWl0KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mZXRjaEFsbCh7IHdpdGhSZWxhdGVkOiBjb25maWcud2l0aFJlbGF0ZWQgfSk7XG4gICAgICB9KTtcbiAgfSxcblxuICBmZXRjaE9uZShwYXJhbXMpIHtcbiAgICByZXR1cm4gdmFsaWRhdGUocGFyYW1zLCByZXN1bHQodGhpcywgJ2ZldGNoT25lUGFyYW1zU2NoZW1hJyksIHsgY2FzdDogdHJ1ZSB9KVxuICAgICAgLmNhdGNoKGUgPT4geyB0aHJvdyBuZXcgVkVycm9yKGUsICdpbnZhbGlkIGZldGNoT25lIHBhcmFtcycpOyB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25maWcgPSBkZWZhdWx0cyh7fSwgcGFyYW1zLCByZXN1bHQodGhpcywgJ2ZldGNoT25lUGFyYW1zRGVmYXVsdHMnKSk7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyh7IGlkOiBjb25maWcuaWQgfSlcbiAgICAgICAgICAuZmV0Y2goeyB3aXRoUmVsYXRlZDogY29uZmlnLndpdGhSZWxhdGVkIH0pO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgY3JlYXRlKHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgdGhpcygpXG4gICAgICAuc2F2ZShwYXJhbXMsIHsgbWV0aG9kOiAnaW5zZXJ0JyB9KVxuICAgICAgLmNhdGNoKGUgPT4geyB0aHJvdyBuZXcgVkVycm9yKGUsICdpbnZhbGlkIGNyZWF0ZSBwYXJhbXMnKTsgfSk7XG4gIH0sXG5cbiAgZmV0Y2hQYXJhbXNTY2hlbWEoKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGtleXModGhpcy5wcm90b3R5cGUuZGVmYXVsdHMpO1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbJ2FzYycsICdkZXNjJ107XG4gICAgY29uc3QgcmVsYXRlZCA9IHRoaXMucmVsYXRpb25zLmZldGNoO1xuICAgIHJldHVybiB7XG4gICAgICAncHJvcGVydGllcyc6IHtcbiAgICAgICAgJ29yZGVyQnknOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZW51bTogYXR0cmlidXRlcyxcbiAgICAgICAgICBtZXNzYWdlOiAnbXVzdCBiZSBvbmUgb2YgWycgKyBhdHRyaWJ1dGVzLmpvaW4oJywgJykgKyAnXSdcbiAgICAgICAgfSxcbiAgICAgICAgJ2RpcmVjdGlvbic6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBlbnVtOiBkaXJlY3Rpb25zLFxuICAgICAgICAgIG1lc3NhZ2U6ICdtdXN0IGJlIG9uZSBvZiBbJyArIGRpcmVjdGlvbnMuam9pbignLCAnKSArICddJ1xuICAgICAgICB9LFxuICAgICAgICAnbGltaXQnOiB7XG4gICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgIG1pbmltdW06IDAsXG4gICAgICAgICAgbWF4aW11bTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgICdvZmZzZXQnOiB7XG4gICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgIG1pbmltdW06IDBcbiAgICAgICAgfSxcbiAgICAgICAgJ3dpdGhSZWxhdGVkJzoge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgY29uZm9ybTogdmFsdWUgPT4gZGlmZmVyZW5jZSh2YWx1ZSwgcmVsYXRlZCkubGVuZ3RoID09PSAwLFxuICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBjb25mb3JtOiAnbXVzdCBiZSBhIHN1YnNldCBvZiBbJyArIHJlbGF0ZWQuam9pbignLCAnKSArICddJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NlYXJjaCc6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBtaW5MZW5ndGg6IDAsXG4gICAgICAgICAgbWF4TGVuZ3RoOiA3MFxuICAgICAgICB9LFxuICAgICAgICAnc2VhcmNoQnknOiB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBkZXBlbmRlbmNpZXM6ICdzZWFyY2gnLFxuICAgICAgICAgIGNvbmZvcm06IHZhbHVlID0+IGRpZmZlcmVuY2UodmFsdWUsIHRoaXMuc2VhcmNoYWJsZSkubGVuZ3RoID09PSAwLFxuICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6ICdzZWFyY2ggbXVzdCBhbHNvIGJlIHByZXNlbnQnLFxuICAgICAgICAgICAgY29uZm9ybTogJ211c3QgYmUgYSBzdWJzZXQgb2YgWycgKyB0aGlzLnNlYXJjaGFibGUuam9pbignLCAnKSArICddJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgZmV0Y2hQYXJhbXNEZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3JkZXJCeTogJ3VwZGF0ZWRfYXQnLFxuICAgICAgZGlyZWN0aW9uOiAnZGVzYycsXG4gICAgICBsaW1pdDogMjAsXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBzZWFyY2hCeTogdGhpcy5zZWFyY2hhYmxlLFxuICAgICAgd2l0aFJlbGF0ZWQ6IHRoaXMucmVsYXRpb25zLmZldGNoXG4gICAgfTtcbiAgfSxcblxuICBmZXRjaE9uZVBhcmFtc1NjaGVtYSgpIHtcbiAgICBjb25zdCByZWxhdGVkID0gdGhpcy5yZWxhdGlvbnMuZmV0Y2hPbmU7XG4gICAgcmV0dXJuIHtcbiAgICAgICdwcm9wZXJ0aWVzJzoge1xuICAgICAgICAnaWQnOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICAgIH0sXG4gICAgICAgICd3aXRoUmVsYXRlZCc6IHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGNvbmZvcm06IHYgPT4gZGlmZmVyZW5jZSh2LCByZWxhdGVkKS5sZW5ndGggPT09IDAsXG4gICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgIGNvbmZvcm06ICdtdXN0IGJlIGEgc3Vic2V0IG9mIFsnICsgcmVsYXRlZC5qb2luKCcsICcpICsgJ10nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgXG4gIGZldGNoT25lUGFyYW1zRGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpdGhSZWxhdGVkOiB0aGlzLnJlbGF0aW9ucy5mZXRjaE9uZVxuICAgIH07XG4gIH1cblxufSk7XG4iXX0=