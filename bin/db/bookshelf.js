'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _configJs = require('../../config.js');

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var pg = (0, _knex2['default'])({
  client: 'postgres',
  connection: 'postgres://' + _configJs.db.user + ':' + _configJs.db.password + '@' + _configJs.db.host + ':' + _configJs.db.port + '/' + _configJs.db.name
});

exports['default'] = (0, _bookshelf2['default'])(pg);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL2Jvb2tzaGVsZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7O3dCQUVNLGlCQUFpQjs7b0JBQ25CLE1BQU07Ozs7eUJBQ0QsV0FBVzs7OztBQUVqQyxJQUFNLEVBQUUsR0FBRyx1QkFBSztBQUNkLFFBQU0sRUFBRSxVQUFVO0FBQ2xCLFlBQVUsRUFBRSxhQUFhLEdBQUcsVUFOckIsRUFBRSxDQU1zQixJQUFJLEdBQUcsR0FBRyxHQUFHLFVBTnJDLEVBQUUsQ0FNc0MsUUFBUSxHQUFHLEdBQUcsR0FBRyxVQU56RCxFQUFFLENBTTBELElBQUksR0FBRyxHQUFHLEdBQUcsVUFOekUsRUFBRSxDQU0wRSxJQUFJLEdBQUcsR0FBRyxHQUFHLFVBTnpGLEVBQUUsQ0FNMEYsSUFBSTtDQUN4RyxDQUFDLENBQUM7O3FCQUVZLDRCQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiJkYi9ib29rc2hlbGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcbmltcG9ydCBrbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IGJvb2tzaGVsZiBmcm9tICdib29rc2hlbGYnO1xuXG5jb25zdCBwZyA9IGtuZXgoe1xuICBjbGllbnQ6ICdwb3N0Z3JlcycsXG4gIGNvbm5lY3Rpb246ICdwb3N0Z3JlczovLycgKyBkYi51c2VyICsgJzonICsgZGIucGFzc3dvcmQgKyAnQCcgKyBkYi5ob3N0ICsgJzonICsgZGIucG9ydCArICcvJyArIGRiLm5hbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBib29rc2hlbGYocGcpO1xuIl19