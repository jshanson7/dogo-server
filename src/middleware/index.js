import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import qs from 'koa-qs';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import koaValidate from 'koa-validate';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from 'koa-cors';
import session from 'koa-session';
import passport from 'koa-passport';
import errorHandler from './errorHandler';
import sessionViewCounter from './sessionViewCounter';
import { env } from '../config';
import schema from '../graphql/schema';
import { IndexRouter } from '../routers';

export default app => {
  if (env === 'development' || env === 'staging') { app.use(logger()); }
  qs(app);

  return app.use(errorHandler)
    .use(sessionViewCounter)
    .use(session(app))
    .use(passport.initialize())
    .use(passport.session())
    .use(helmet())
    .use(cors())
    .use(mount('/graphql', graphqlHTTP({ schema, pretty: true })))
    .use(bodyParser())
    .use(koaValidate())
    .use(mount('/api/v1', IndexRouter.routes()))
    .use(compress());
};

