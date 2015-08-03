'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _verror = require('verror');

var _verror2 = _interopRequireDefault(_verror);

var _lodash = require('lodash');

var getParams = function getParams(ctx) {
  return (0, _lodash.assign)({}, ctx.query, ctx.request.body, ctx.params);
};

exports['default'] = function (Model) {
  return {
    list: _regeneratorRuntime.mark(function list(next) {
      return _regeneratorRuntime.wrap(function list$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return Model.fetch(getParams(this))['catch'](function (e) {
              return _this['throw'](new _verror2['default'](e, 'fetch error'), 400);
            });

          case 2:
            this.body = context$2$0.sent;
            context$2$0.next = 5;
            return next;

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, list, this);
    }),

    show: _regeneratorRuntime.mark(function show(next) {
      var model;
      return _regeneratorRuntime.wrap(function show$(context$2$0) {
        var _this2 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return Model.fetchOne(getParams(this))['catch'](function (e) {
              return _this2['throw'](new _verror2['default'](e, 'fetchOne error'), 400);
            });

          case 2:
            model = context$2$0.sent;

            if (!model) {
              this['throw']('Not found', 404);
            }

            this.body = model;
            context$2$0.next = 7;
            return next;

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, show, this);
    }),

    create: _regeneratorRuntime.mark(function create(next) {
      var result;
      return _regeneratorRuntime.wrap(function create$(context$2$0) {
        var _this3 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return Model.create(getParams(this))['catch'](function (e) {
              return _this3['throw'](new _verror2['default'](e, 'create error'), 400);
            });

          case 2:
            result = context$2$0.sent;

            this.body = result;
            context$2$0.next = 6;
            return next;

          case 6:
          case 'end':
            return context$2$0.stop();
        }
      }, create, this);
    }),

    destroy: _regeneratorRuntime.mark(function destroy(next) {
      var model, result;
      return _regeneratorRuntime.wrap(function destroy$(context$2$0) {
        var _this4 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return Model.fetchOne(getParams(this))['catch'](function (e) {
              return _this4['throw'](new _verror2['default'](e, 'fetchOne error'), 400);
            });

          case 2:
            model = context$2$0.sent;

            if (!model) {
              this['throw']('Not found', 404);
            }

            context$2$0.next = 6;
            return model.destroy()['catch'](function (e) {
              return _this4['throw'](new _verror2['default'](e, 'destroy error'), 400);
            });

          case 6:
            result = context$2$0.sent;

            this.body = result;
            context$2$0.next = 10;
            return next;

          case 10:
          case 'end':
            return context$2$0.stop();
        }
      }, destroy, this);
    })
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NvbXBvc2UvcmVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7c0JBRU0sUUFBUTs7OztzQkFDSixRQUFROztBQUUvQixJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBSSxHQUFHO1NBQUssWUFGbEIsTUFBTSxFQUVtQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDO0NBQUEsQ0FBQzs7cUJBRWhFLFVBQUMsS0FBSyxFQUFLO0FBQ3hCLFNBQU87QUFDTCxBQUFDLFFBQUksMkJBQUEsY0FBQyxJQUFJOzs7Ozs7O21CQUNVLEtBQUssQ0FDcEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUNqQixDQUFDLFVBQUEsQ0FBQztxQkFBSSxjQUFVLENBQUMsd0JBQVcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUcsQ0FBQzthQUFBLENBQUM7OztBQUY1RCxnQkFBSSxDQUFDLElBQUk7O21CQUlILElBQUk7Ozs7Ozs7S0FDWCxDQUFBOztBQUVELEFBQUMsUUFBSSwyQkFBQSxjQUFDLElBQUk7VUFDRixLQUFLOzs7Ozs7O21CQUFTLEtBQUssQ0FDdEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUNwQixDQUFDLFVBQUEsQ0FBQztxQkFBSSxlQUFVLENBQUMsd0JBQVcsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxDQUFDO2FBQUEsQ0FBQzs7O0FBRnpELGlCQUFLOztBQUlYLGdCQUFJLENBQUMsS0FBSyxFQUFFO0FBQUUsa0JBQUksU0FBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUFFOztBQUU3QyxnQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7O21CQUNaLElBQUk7Ozs7Ozs7S0FDWCxDQUFBOztBQUVELEFBQUMsVUFBTSwyQkFBQSxnQkFBQyxJQUFJO1VBQ0osTUFBTTs7Ozs7OzttQkFBUyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUMxQyxDQUFDLFVBQUEsQ0FBQztxQkFBSSxlQUFVLENBQUMsd0JBQVcsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzthQUFBLENBQUM7OztBQUR2RCxrQkFBTTs7QUFHWixnQkFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7O21CQUNiLElBQUk7Ozs7Ozs7S0FDWCxDQUFBOztBQUVELEFBQUMsV0FBTywyQkFBQSxpQkFBQyxJQUFJO1VBQ0wsS0FBSyxFQU1MLE1BQU07Ozs7Ozs7bUJBTlEsS0FBSyxDQUN0QixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQ3BCLENBQUMsVUFBQSxDQUFDO3FCQUFJLGVBQVUsQ0FBQyx3QkFBVyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLENBQUM7YUFBQSxDQUFDOzs7QUFGekQsaUJBQUs7O0FBSVgsZ0JBQUksQ0FBQyxLQUFLLEVBQUU7QUFBRSxrQkFBSSxTQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQUU7OzttQkFFeEIsS0FBSyxDQUN2QixPQUFPLEVBQUUsU0FDSixDQUFDLFVBQUEsQ0FBQztxQkFBSSxlQUFVLENBQUMsd0JBQVcsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzthQUFBLENBQUM7OztBQUZ4RCxrQkFBTTs7QUFJWixnQkFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7O21CQUNiLElBQUk7Ozs7Ozs7S0FDWCxDQUFBO0dBQ0YsQ0FBQTtDQUNGIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NvbXBvc2UvcmVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZFcnJvciBmcm9tICd2ZXJyb3InO1xuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZ2V0UGFyYW1zID0gKGN0eCkgPT4gYXNzaWduKHt9LCBjdHgucXVlcnksIGN0eC5yZXF1ZXN0LmJvZHksIGN0eC5wYXJhbXMpO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kZWwpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAqbGlzdChuZXh0KSB7XG4gICAgICB0aGlzLmJvZHkgPSB5aWVsZCBNb2RlbFxuICAgICAgICAuZmV0Y2goZ2V0UGFyYW1zKHRoaXMpKVxuICAgICAgICAuY2F0Y2goZSA9PiB0aGlzLnRocm93KG5ldyBWRXJyb3IoZSwgJ2ZldGNoIGVycm9yJyksIDQwMCkpO1xuXG4gICAgICB5aWVsZCBuZXh0O1xuICAgIH0sXG5cbiAgICAqc2hvdyhuZXh0KSB7XG4gICAgICBjb25zdCBtb2RlbCA9IHlpZWxkIE1vZGVsXG4gICAgICAgIC5mZXRjaE9uZShnZXRQYXJhbXModGhpcykpXG4gICAgICAgIC5jYXRjaChlID0+IHRoaXMudGhyb3cobmV3IFZFcnJvcihlLCAnZmV0Y2hPbmUgZXJyb3InKSwgNDAwKSk7XG5cbiAgICAgIGlmICghbW9kZWwpIHsgdGhpcy50aHJvdygnTm90IGZvdW5kJywgNDA0KTsgfVxuXG4gICAgICB0aGlzLmJvZHkgPSBtb2RlbDtcbiAgICAgIHlpZWxkIG5leHQ7XG4gICAgfSxcblxuICAgICpjcmVhdGUobmV4dCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgTW9kZWwuY3JlYXRlKGdldFBhcmFtcyh0aGlzKSlcbiAgICAgICAgLmNhdGNoKGUgPT4gdGhpcy50aHJvdyhuZXcgVkVycm9yKGUsICdjcmVhdGUgZXJyb3InKSwgNDAwKSk7XG5cbiAgICAgIHRoaXMuYm9keSA9IHJlc3VsdDtcbiAgICAgIHlpZWxkIG5leHQ7XG4gICAgfSxcblxuICAgICpkZXN0cm95KG5leHQpIHtcbiAgICAgIGNvbnN0IG1vZGVsID0geWllbGQgTW9kZWxcbiAgICAgICAgLmZldGNoT25lKGdldFBhcmFtcyh0aGlzKSlcbiAgICAgICAgLmNhdGNoKGUgPT4gdGhpcy50aHJvdyhuZXcgVkVycm9yKGUsICdmZXRjaE9uZSBlcnJvcicpLCA0MDApKTtcbiAgICAgIFxuICAgICAgaWYgKCFtb2RlbCkgeyB0aGlzLnRocm93KCdOb3QgZm91bmQnLCA0MDQpOyB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIG1vZGVsXG4gICAgICAgIC5kZXN0cm95KClcbiAgICAgICAgLmNhdGNoKGUgPT4gdGhpcy50aHJvdyhuZXcgVkVycm9yKGUsICdkZXN0cm95IGVycm9yJyksIDQwMCkpO1xuICAgICAgXG4gICAgICB0aGlzLmJvZHkgPSByZXN1bHQ7XG4gICAgICB5aWVsZCBuZXh0O1xuICAgIH1cbiAgfVxufTtcbiJdfQ==