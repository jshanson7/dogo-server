'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _modelsDog = require('../models/dog');

var _modelsDog2 = _interopRequireDefault(_modelsDog);

var _composeRest = require('./compose/rest');

var _composeRest2 = _interopRequireDefault(_composeRest);

var DogController = function DogController() {
  _classCallCheck(this, DogController);
};

;

(0, _lodash.assign)(DogController.prototype, (0, _composeRest2['default'])(_modelsDog2['default']));

exports['default'] = DogController;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2RvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7c0JBRVUsUUFBUTs7eUJBQ2YsZUFBZTs7OzsyQkFDZCxnQkFBZ0I7Ozs7SUFFM0IsYUFBYSxZQUFiLGFBQWE7d0JBQWIsYUFBYTs7O0FBQUcsQ0FBQzs7QUFFdkIsWUFOUyxNQUFNLEVBTVIsYUFBYSxDQUFDLFNBQVMsRUFBRSxxREFBUyxDQUFDLENBQUM7O3FCQUU1QixhQUFhIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2RvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBEb2cgZnJvbSAnLi4vbW9kZWxzL2RvZyc7XG5pbXBvcnQgcmVzdCBmcm9tICcuL2NvbXBvc2UvcmVzdCc7XG5cbmNsYXNzIERvZ0NvbnRyb2xsZXIge307XG5cbmFzc2lnbihEb2dDb250cm9sbGVyLnByb3RvdHlwZSwgcmVzdChEb2cpKTtcblxuZXhwb3J0IGRlZmF1bHQgRG9nQ29udHJvbGxlcjtcbiJdfQ==