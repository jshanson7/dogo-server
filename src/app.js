import Koa from 'koa';
import { env, keys, port, host } from 'config';
import middleware from 'middleware';

export const app = new Koa();

Object.assign(app, { keys, start });
middleware(app);

export function start() {
  return app.listen(port, host, () =>
    console.log(`App listening on port ${port} env: ${env}`)
  );
}

if (!module.parent) { start(); }
