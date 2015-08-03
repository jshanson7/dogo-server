'use strict';

import 'source-map-support/register';
import koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import koaValidate from 'koa-validate';
import mount from 'koa-mount';
import qs from 'koa-qs';
import routers from './routers';

const app = koa();

if (app.env !== 'production' && app.env !== 'test') {
  app.use(logger());
}

app.use(function *(next) {
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
app.use(compress());

if (!module.parent) {
  app.listen(3000, () => console.log('App listening on port 3000'));
}

export default app;
