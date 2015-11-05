import { log, colors } from 'gulp-util';
import { env } from '../../config';

log('gulpfile env:', colors.green(env));

require('gulp').task('noop', function() {});

export * from './compile';
export * from './serve';
export * from './db';
export * from './test';
