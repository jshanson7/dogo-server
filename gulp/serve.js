import gulp from 'gulp';
import path from 'path';
import seq from 'run-sequence';
import nodemon from 'gulp-nodemon';
import { env } from '../config';

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
    exec: 'node ' + path.join(__dirname, '../node_modules/.bin/node-debug'),
    script: path.join(__dirname, '../src/index.js'),
    watch: path.join(__dirname, '../src'),
    args: ['--' + env]
  })
);

gulp.task('nodemon', () =>
  nodemon({
    exec: 'node --harmony',
    script: path.join(__dirname, '../src/index.js'),
    watch: path.join(__dirname, '../src'),
    args: ['--' + env]
  })
);
