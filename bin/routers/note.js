'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controllersNote = require('../controllers/note');

var _controllersNote2 = _interopRequireDefault(_controllersNote);

var router = (0, _koaRouter2['default'])();
var noteController = new _controllersNote2['default']();

router.get('/', noteController.list);
router.get('/:id', noteController.show);
router.post('/', noteController.create);
router['delete']('/:id', noteController.destroy);

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcnMvbm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7O3lCQUVTLFlBQVk7Ozs7K0JBQ1AscUJBQXFCOzs7O0FBRWhELElBQU0sTUFBTSxHQUFHLDZCQUFXLENBQUM7QUFDM0IsSUFBTSxjQUFjLEdBQUcsa0NBQW9CLENBQUM7O0FBRTVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sVUFBTyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7O3FCQUUvQixNQUFNIiwiZmlsZSI6InJvdXRlcnMvbm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGtvYVJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBOb3RlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9ub3RlJztcblxuY29uc3Qgcm91dGVyID0ga29hUm91dGVyKCk7XG5jb25zdCBub3RlQ29udHJvbGxlciA9IG5ldyBOb3RlQ29udHJvbGxlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgbm90ZUNvbnRyb2xsZXIubGlzdCk7XG5yb3V0ZXIuZ2V0KCcvOmlkJywgbm90ZUNvbnRyb2xsZXIuc2hvdyk7XG5yb3V0ZXIucG9zdCgnLycsIG5vdGVDb250cm9sbGVyLmNyZWF0ZSk7XG5yb3V0ZXIuZGVsZXRlKCcvOmlkJywgbm90ZUNvbnRyb2xsZXIuZGVzdHJveSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==