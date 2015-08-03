'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('source-map-support/register');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaHelmet = require('koa-helmet');

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaValidate = require('koa-validate');

var _koaValidate2 = _interopRequireDefault(_koaValidate);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaQs = require('koa-qs');

var _koaQs2 = _interopRequireDefault(_koaQs);

var _routers = require('./routers');

var _routers2 = _interopRequireDefault(_routers);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var app = (0, _koa2['default'])();
app.env = _config2['default'].env;

if (app.env === 'development') {
  app.use((0, _koaLogger2['default'])());
}

app.use(_regeneratorRuntime.mark(function callee$0$0(next) {
  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return next;

      case 3:
        context$1$0.next = 10;
        break;

      case 5:
        context$1$0.prev = 5;
        context$1$0.t0 = context$1$0['catch'](0);

        this.status = context$1$0.t0.status || 500;
        this.body = context$1$0.t0.message;
        this.app.emit('error', context$1$0.t0, this);

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, callee$0$0, this, [[0, 5]]);
}));

(0, _koaQs2['default'])(app);
app.use(_koaHelmet2['default'].defaults());
app.use((0, _koaBodyparser2['default'])());
app.use((0, _koaValidate2['default'])());
app.use((0, _koaMount2['default'])('/api/v1', _routers2['default'].routes()));
app.use((0, _koaCompress2['default'])());

if (!module.parent) {
  app.listen(_config2['default'].port, function () {
    return console.log('App listening on port ' + _config2['default'].port + ' env: ' + app.env);
  });
}

exports['default'] = app;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7UUFFTiw2QkFBNkI7O21CQUNwQixLQUFLOzs7O3lCQUNGLFlBQVk7Ozs7NkJBQ1IsZ0JBQWdCOzs7OzJCQUNsQixjQUFjOzs7O3lCQUNoQixZQUFZOzs7OzJCQUNQLGNBQWM7Ozs7d0JBQ3BCLFdBQVc7Ozs7cUJBQ2QsUUFBUTs7Ozt1QkFDSCxXQUFXOzs7O3NCQUNaLFdBQVc7Ozs7QUFFOUIsSUFBTSxHQUFHLEdBQUcsdUJBQUssQ0FBQztBQUNsQixHQUFHLENBQUMsR0FBRyxHQUFHLG9CQUFPLEdBQUcsQ0FBQzs7QUFFckIsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLGFBQWEsRUFBRTtBQUM3QixLQUFHLENBQUMsR0FBRyxDQUFDLDZCQUFRLENBQUMsQ0FBQztDQUNuQjs7QUFFRCxHQUFHLENBQUMsR0FBRywwQkFBQyxvQkFBVyxJQUFJOzs7Ozs7ZUFDVCxJQUFJOzs7Ozs7Ozs7O0FBRWQsWUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFJLE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDaEMsWUFBSSxDQUFDLElBQUksR0FBRyxlQUFJLE9BQU8sQ0FBQztBQUN4QixZQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLGtCQUFPLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0NBRXJDLEVBQUMsQ0FBQzs7QUFFSCx3QkFBRyxHQUFHLENBQUMsQ0FBQztBQUNSLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQU8sUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFZLENBQUMsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUFhLENBQUMsQ0FBQztBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLDJCQUFNLFNBQVMsRUFBRSxxQkFBUSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBVSxDQUFDLENBQUM7O0FBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ2xCLEtBQUcsQ0FBQyxNQUFNLENBQUMsb0JBQU8sSUFBSSxFQUFFO1dBQU0sT0FBTyxDQUFDLEdBQUcsNEJBQTBCLG9CQUFPLElBQUksY0FBUyxHQUFHLENBQUMsR0FBRyxDQUFHO0dBQUEsQ0FBQyxDQUFDO0NBQ3BHOztxQkFFYyxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdrb2EtbG9nZ2VyJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2tvYS1ib2R5cGFyc2VyJztcbmltcG9ydCBjb21wcmVzcyBmcm9tICdrb2EtY29tcHJlc3MnO1xuaW1wb3J0IGhlbG1ldCBmcm9tICdrb2EtaGVsbWV0JztcbmltcG9ydCBrb2FWYWxpZGF0ZSBmcm9tICdrb2EtdmFsaWRhdGUnO1xuaW1wb3J0IG1vdW50IGZyb20gJ2tvYS1tb3VudCc7XG5pbXBvcnQgcXMgZnJvbSAna29hLXFzJztcbmltcG9ydCByb3V0ZXJzIGZyb20gJy4vcm91dGVycyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGFwcCA9IGtvYSgpO1xuYXBwLmVudiA9IGNvbmZpZy5lbnY7XG5cbmlmIChhcHAuZW52ID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGFwcC51c2UobG9nZ2VyKCkpO1xufVxuXG5hcHAudXNlKGZ1bmN0aW9uICoobmV4dCkge1xuICB0cnkgeyB5aWVsZCBuZXh0OyB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICB0aGlzLnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNTAwO1xuICAgIHRoaXMuYm9keSA9IGVyci5tZXNzYWdlO1xuICAgIHRoaXMuYXBwLmVtaXQoJ2Vycm9yJywgZXJyLCB0aGlzKTtcbiAgfVxufSk7XG5cbnFzKGFwcCk7XG5hcHAudXNlKGhlbG1ldC5kZWZhdWx0cygpKTtcbmFwcC51c2UoYm9keVBhcnNlcigpKTtcbmFwcC51c2Uoa29hVmFsaWRhdGUoKSk7XG5hcHAudXNlKG1vdW50KCcvYXBpL3YxJywgcm91dGVycy5yb3V0ZXMoKSkpO1xuYXBwLnVzZShjb21wcmVzcygpKTtcblxuaWYgKCFtb2R1bGUucGFyZW50KSB7XG4gIGFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBBcHAgbGlzdGVuaW5nIG9uIHBvcnQgJHtjb25maWcucG9ydH0gZW52OiAke2FwcC5lbnZ9YCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=