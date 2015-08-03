'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controllersUser = require('../controllers/user');

var _controllersUser2 = _interopRequireDefault(_controllersUser);

var router = (0, _koaRouter2['default'])();
var userController = new _controllersUser2['default']();

router.get('/', userController.list);
router.get('/:id', userController.show);
router.post('/', userController.create);
router['delete']('/:id', userController.destroy);

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcnMvdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7O3lCQUVTLFlBQVk7Ozs7K0JBQ1AscUJBQXFCOzs7O0FBRWhELElBQU0sTUFBTSxHQUFHLDZCQUFXLENBQUM7QUFDM0IsSUFBTSxjQUFjLEdBQUcsa0NBQW9CLENBQUE7O0FBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sVUFBTyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7O3FCQUUvQixNQUFNIiwiZmlsZSI6InJvdXRlcnMvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGtvYVJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuY29uc3Qgcm91dGVyID0ga29hUm91dGVyKCk7XG5jb25zdCB1c2VyQ29udHJvbGxlciA9IG5ldyBVc2VyQ29udHJvbGxlcigpXG5cbnJvdXRlci5nZXQoJy8nLCB1c2VyQ29udHJvbGxlci5saXN0KTtcbnJvdXRlci5nZXQoJy86aWQnLCB1c2VyQ29udHJvbGxlci5zaG93KTtcbnJvdXRlci5wb3N0KCcvJywgdXNlckNvbnRyb2xsZXIuY3JlYXRlKTtcbnJvdXRlci5kZWxldGUoJy86aWQnLCB1c2VyQ29udHJvbGxlci5kZXN0cm95KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19