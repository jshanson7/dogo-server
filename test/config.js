import { env } from '../src/config/app';

export default {
  reporter: 'dot',
  harmony: true,
  env: { NODE_ENV: env === 'staging' ? 'staging' : 'test' },
  compilers: 'js:babel/register',
  timeout: 5000
};
