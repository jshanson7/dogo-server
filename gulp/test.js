'use strict';

const gulp = require('./gulp');
const seq = require('run-sequence');
const mocha = require('gulp-mocha');
const spawnMocha = require('gulp-spawn-mocha');
const istanbul = require('gulp-istanbul');
const debounce = require('lodash').debounce;
const fromRoot = require('./util/fromRoot');
const mochaConf = require(fromRoot('./config')).mocha;

gulp.task('watch:mocha', () =>
  gulp.watch(fromRoot('/bin/**/*.js'), debounce(() =>
    seq('mocha'), 1000)
  )
);

gulp.task('mocha', () =>
  gulp
    .src(fromRoot('bin/test/*.js'), { read: false })
    .pipe(spawnMocha(mochaConf))
);

gulp.task('coverage', (cb) =>
  gulp.src([fromRoot('bin/**/*.js')])
    .pipe(istanbul()) 
    .pipe(istanbul.hookRequire())
    .on('finish', () =>
      gulp
        .src([fromRoot('bin/test/*.js')])
        .pipe(mocha(mochaConf))
        .pipe(istanbul.writeReports())
        // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .on('finish', cb)
    )
);