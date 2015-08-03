'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _modelsNote = require('../models/note');

var _modelsNote2 = _interopRequireDefault(_modelsNote);

var _composeRest = require('./compose/rest');

var _composeRest2 = _interopRequireDefault(_composeRest);

var NoteController = function NoteController() {
  _classCallCheck(this, NoteController);
};

;

(0, _lodash.assign)(NoteController.prototype, (0, _composeRest2['default'])(_modelsNote2['default']));

exports['default'] = NoteController;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL25vdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O3NCQUVVLFFBQVE7OzBCQUNkLGdCQUFnQjs7OzsyQkFDaEIsZ0JBQWdCOzs7O0lBRTNCLGNBQWMsWUFBZCxjQUFjO3dCQUFkLGNBQWM7OztBQUFHLENBQUM7O0FBRXhCLFlBTlMsTUFBTSxFQU1SLGNBQWMsQ0FBQyxTQUFTLEVBQUUsc0RBQVUsQ0FBQyxDQUFDOztxQkFFOUIsY0FBYyIsImZpbGUiOiJjb250cm9sbGVycy9ub3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBhc3NpZ24gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vbW9kZWxzL25vdGUnO1xuaW1wb3J0IHJlc3QgZnJvbSAnLi9jb21wb3NlL3Jlc3QnO1xuXG5jbGFzcyBOb3RlQ29udHJvbGxlciB7fTtcblxuYXNzaWduKE5vdGVDb250cm9sbGVyLnByb3RvdHlwZSwgcmVzdChOb3RlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVDb250cm9sbGVyO1xuIl19