import { resolve } from 'path';
import { env } from '../src/config/app';

export default {
  // reporter: 'dot',
  harmony: true,
  env: {
    NODE_ENV: env === 'staging' ? 'staging' : 'test',
    NODE_PATH: resolve(__dirname, '../src')
  },
  compilers: 'js:babel/register',
  timeout: 10000
};
