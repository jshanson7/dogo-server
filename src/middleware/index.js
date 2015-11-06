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
import schema from '../db/graphql/schema';
import { IndexRouter } from '../routers';

export default app => {
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

  app.use(session(app));
  app.use(passport.initialize());
  app.use(passport.session());

  qs(app);
  app.use(helmet());
  app.use(cors());
  app.use(mount('/graphql', graphqlHTTP({ schema, pretty: true })));
  app.use(bodyParser());
  app.use(koaValidate());

  app.use(mount('/api/v1', IndexRouter.routes()));
  app.use(compress());

  return app;
};