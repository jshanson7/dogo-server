import gulp from 'gulp';
import { resolve } from 'path';
import seq from 'run-sequence';
import nodemon from 'gulp-nodemon';
import { env } from '../../config';

const nodeDebug = resolve(__dirname, '../../node_modules/.bin/node-debug');
const app = resolve(__dirname, '../../src/index.js');
const src = resolve(__dirname, '../../src');

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
