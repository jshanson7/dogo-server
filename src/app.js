import koa from 'koa';
import { env, keys, port, host } from './config';
import middleware from './middleware';

const app = middleware(Object.assign(koa(), { env, keys, start }));

export default app;

function start() {
  return app.listen(port, host, () =>
    console.log(`App listening on port ${port} env: ${env}`)
  );
}

if (!module.parent) { start(); }
