import { log, colors } from 'gulp-util';
import { env } from '../src/config';

log('gulpfile env:', colors.green(env));

export * from './build';
export * from './compile';
export * from './serve';
export * from './db';
export * from './test';
export * from './dev';
