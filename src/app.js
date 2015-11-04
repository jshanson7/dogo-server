import koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import koaValidate from 'koa-validate';
import mount from 'koa-mount';
import qs from 'koa-qs';
import graphqlHTTP from 'koa-graphql';
import cors from 'koa-cors';
import session from 'koa-session';
import passport from 'koa-passport';
import routers from './routers';
import config from '../config';
import Schema from './db/graphql/schema';

const app = koa();
app.env = config.env;

if (app.env === 'development' || app.env === 'staging') {
  app.use(logger());
}

app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(function *(next) {
  if (this.path === '/favicon.ico') { return; }

  var n = this.session.views || 0;
  this.session.views = ++n;
  yield next;
});

app.keys = config.appKeys;
app.use(session(app));
app.use(passport.initialize());
app.use(passport.session());

qs(app);
app.use(helmet());
app.use(cors());
app.use(mount('/graphql', graphqlHTTP({ schema: Schema, pretty: true })));
app.use(bodyParser());
app.use(koaValidate());

app.use(mount('/api/v1', routers.routes()));
app.use(compress());

app.start = start;

if (!module.parent) { start(); }

export default app;

function start() {
  return app.listen(config.port, config.host, () =>
    console.log(`App listening on port ${config.port} env: ${config.env}`)
  );
}
