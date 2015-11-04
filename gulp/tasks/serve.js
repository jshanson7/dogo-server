import gulp from 'gulp';
import { join } from 'path';
import seq from 'run-sequence';
import nodemon from 'gulp-nodemon';
import { env } from '../../config';

const nodeDebug = join(__dirname, '../../node_modules/.bin/node-debug');
const app = join(__dirname, '../../src/index.js');
const src = join(__dirname, '../../src');

gulp.task('default', ['dev']);

gulp.task('dev', cb =>
  seq(
    'updateSchema',
    'lint',
    'mocha',
    'nodemon',
    'watch:updateSchema',
    'watch:test',
    cb
  )
);

// nodemon + node-inspector stopped working recently
gulp.task('nodemon:debug', () =>
  nodemon({
    exec: 'node ' + nodeDebug,
    script: app,
    watch: src,
    args: ['--' + env]
  })
);

gulp.task('nodemon', () =>
  nodemon({
    exec: 'node --harmony',
    script: app,
    watch: src,
    args: ['--' + env]
  })
);
