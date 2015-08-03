'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _modelsUser = require('../models/user');

var _modelsUser2 = _interopRequireDefault(_modelsUser);

var _composeRest = require('./compose/rest');

var _composeRest2 = _interopRequireDefault(_composeRest);

var UserController = function UserController() {
  _classCallCheck(this, UserController);
};

;

(0, _lodash.assign)(UserController.prototype, (0, _composeRest2['default'])(_modelsUser2['default']));

exports['default'] = UserController;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O3NCQUVVLFFBQVE7OzBCQUNkLGdCQUFnQjs7OzsyQkFDaEIsZ0JBQWdCOzs7O0lBRTNCLGNBQWMsWUFBZCxjQUFjO3dCQUFkLGNBQWM7OztBQUFHLENBQUM7O0FBRXhCLFlBTlMsTUFBTSxFQU1SLGNBQWMsQ0FBQyxTQUFTLEVBQUUsc0RBQVUsQ0FBQyxDQUFDOztxQkFFOUIsY0FBYyIsImZpbGUiOiJjb250cm9sbGVycy91c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBhc3NpZ24gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHJlc3QgZnJvbSAnLi9jb21wb3NlL3Jlc3QnO1xuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7fTtcblxuYXNzaWduKFVzZXJDb250cm9sbGVyLnByb3RvdHlwZSwgcmVzdChVc2VyKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250cm9sbGVyO1xuIl19