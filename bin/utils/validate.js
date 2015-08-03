'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _verror = require('verror');

var _verror2 = _interopRequireDefault(_verror);

var _revalidator = require('revalidator');

var _revalidator2 = _interopRequireDefault(_revalidator);

exports['default'] = function (object, schema, options) {
  return new _Promise(function (resolve, reject) {
    var response = _revalidator2['default'].validate(object, schema, options);
    return response.valid ? resolve() : reject(new _verror2['default']('validation errors: \n\t%s', response.errors.map(function (e) {
      return e.property + ': ' + e.message;
    }).join('\n\t')));
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3ZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztzQkFFTSxRQUFROzs7OzJCQUNILGFBQWE7Ozs7cUJBRXRCLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUs7QUFDMUMsU0FBTyxhQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxRQUFNLFFBQVEsR0FBRyx5QkFBWSxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvRCxXQUFPLFFBQVEsQ0FBQyxLQUFLLEdBQ25CLE9BQU8sRUFBRSxHQUNULE1BQU0sQ0FDSix3QkFDRSwyQkFBMkIsRUFDM0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU87S0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNyRSxDQUNGLENBQUM7R0FDTCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ1dGlscy92YWxpZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZFcnJvciBmcm9tICd2ZXJyb3InO1xuaW1wb3J0IHJldmFsaWRhdG9yIGZyb20gJ3JldmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKG9iamVjdCwgc2NoZW1hLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSByZXZhbGlkYXRvci52YWxpZGF0ZShvYmplY3QsIHNjaGVtYSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnZhbGlkID9cbiAgICAgIHJlc29sdmUoKSA6XG4gICAgICByZWplY3QoXG4gICAgICAgIG5ldyBWRXJyb3IoXG4gICAgICAgICAgJ3ZhbGlkYXRpb24gZXJyb3JzOiBcXG5cXHQlcycsXG4gICAgICAgICAgcmVzcG9uc2UuZXJyb3JzLm1hcChlID0+IGUucHJvcGVydHkgKyAnOiAnICsgZS5tZXNzYWdlKS5qb2luKCdcXG5cXHQnKVxuICAgICAgICApXG4gICAgICApO1xuICB9KTtcbn07Il19