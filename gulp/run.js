'use strict';

const gulp = require('./gulp');
const seq = require('run-sequence');
const nodemon = require('gulp-nodemon');
const fromRoot = require('./util/fromRoot');
const env = require(fromRoot('./config')).env;

gulp.task('default', ['dev']);

gulp.task('dev', cb =>
  seq(
    'updateSchema',
    'compile',
    'nodemon:debug',
    'mocha',
    'watch:compile',
    'watch:updateSchema',
    'watch:mocha',
    cb
  )
);

gulp.task('nodemon:debug', () =>
  nodemon({
    exec: 'node ' + fromRoot('./node_modules/.bin/node-debug'),
    script: fromRoot('./bin/app.js'),
    watch: fromRoot('bin'),
    args: ['--' + env]
  })
);

gulp.task('nodemon', () =>
  nodemon({
    exec: 'node --harmony',
    script: fromRoot('./bin/app.js'),
    watch: fromRoot('bin'),
    args: ['--' + env]
  })
);
