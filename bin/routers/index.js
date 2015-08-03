'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _dog = require('./dog');

var _dog2 = _interopRequireDefault(_dog);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _note = require('./note');

var _note2 = _interopRequireDefault(_note);

var router = (0, _koaRouter2['default'])();

router.get('/', _regeneratorRuntime.mark(function callee$0$0(next) {
  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        this.body = 'Dogo api';context$1$0.next = 3;
        return next;

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this);
}));
router.use('/dogs', _dog2['default'].routes());
router.use('/users', _user2['default'].routes());
router.use('/notes', _note2['default'].routes());

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O3lCQUVTLFlBQVk7Ozs7bUJBQ2xCLE9BQU87Ozs7b0JBQ04sUUFBUTs7OztvQkFDUixRQUFROzs7O0FBRXpCLElBQU0sTUFBTSxHQUFHLDZCQUFXLENBQUM7O0FBRTNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRywyQkFBRSxvQkFBVyxJQUFJOzs7O0FBQUksWUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7ZUFBTyxJQUFJOzs7Ozs7O0NBQUcsRUFBQyxDQUFDO0FBQzFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGlCQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQUssTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztxQkFFckIsTUFBTSIsImZpbGUiOiJyb3V0ZXJzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQga29hUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IGRvZyBmcm9tICcuL2RvZyc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IG5vdGUgZnJvbSAnLi9ub3RlJztcblxuY29uc3Qgcm91dGVyID0ga29hUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbiAqKG5leHQpIHsgdGhpcy5ib2R5ID0gJ0RvZ28gYXBpJzsgeWllbGQgbmV4dDsgfSk7XG5yb3V0ZXIudXNlKCcvZG9ncycsIGRvZy5yb3V0ZXMoKSk7XG5yb3V0ZXIudXNlKCcvdXNlcnMnLCB1c2VyLnJvdXRlcygpKTtcbnJvdXRlci51c2UoJy9ub3RlcycsIG5vdGUucm91dGVzKCkpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=