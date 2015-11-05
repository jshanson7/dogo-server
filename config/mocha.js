import env from './env';

export default {
  reporter: 'dot',
  harmony: true,
  env: { NODE_ENV: env === 'staging' ? 'staging' : 'test' },
  compilers: 'js:babel/register'
  // timeout: 10000
};
