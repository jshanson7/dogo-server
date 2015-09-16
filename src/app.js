import 'source-map-support/register';
import koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import koaValidate from 'koa-validate';
import mount from 'koa-mount';
import qs from 'koa-qs';
import graphqlHTTP from 'koa-graphql';
import routers from './routers';
import config from '../config';
import { GraphQLDogoSchema } from './db/graphql/schema';

const app = koa();
app.env = config.env;

if (app.env === 'development') {
  app.use(logger());
}

app.use(function* (next) {
  try { yield next; }
  catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

qs(app);
app.use(helmet.defaults());
app.use(bodyParser());
app.use(koaValidate());
app.use(mount('/api/v1', routers.routes()));
app.use(mount('/graphql', graphqlHTTP({ schema: GraphQLDogoSchema })));
app.use(compress());

if (!module.parent) {
  app.listen(config.port, () => console.log(`App listening on port ${config.port} env: ${app.env}`));
}

export default app;
