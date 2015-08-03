'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controllersDog = require('../controllers/dog');

var _controllersDog2 = _interopRequireDefault(_controllersDog);

var router = (0, _koaRouter2['default'])();
var dogController = new _controllersDog2['default']();

router.get('/', dogController.list);
router.get('/:id', dogController.show);
router.post('/', dogController.create);
router['delete']('/:id', dogController.destroy);

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcnMvZG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7eUJBRVMsWUFBWTs7Ozs4QkFDUixvQkFBb0I7Ozs7QUFFOUMsSUFBTSxNQUFNLEdBQUcsNkJBQVcsQ0FBQztBQUMzQixJQUFNLGFBQWEsR0FBRyxpQ0FBbUIsQ0FBQzs7QUFFMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsTUFBTSxVQUFPLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7cUJBRTlCLE1BQU0iLCJmaWxlIjoicm91dGVycy9kb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBrb2FSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgRG9nQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9kb2cnO1xuXG5jb25zdCByb3V0ZXIgPSBrb2FSb3V0ZXIoKTtcbmNvbnN0IGRvZ0NvbnRyb2xsZXIgPSBuZXcgRG9nQ29udHJvbGxlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgZG9nQ29udHJvbGxlci5saXN0KTtcbnJvdXRlci5nZXQoJy86aWQnLCBkb2dDb250cm9sbGVyLnNob3cpO1xucm91dGVyLnBvc3QoJy8nLCBkb2dDb250cm9sbGVyLmNyZWF0ZSk7XG5yb3V0ZXIuZGVsZXRlKCcvOmlkJywgZG9nQ29udHJvbGxlci5kZXN0cm95KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19