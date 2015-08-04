'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-spawn-mocha');
var knex = require('knex');
var debounce = require('lodash').debounce;
var config = require('./config');
var knexConf = require('./knexfile');

gulp.task('default', ['dev']);

gulp.task('dev', ['debug', 'watch:compile', 'watch:mocha']);

gulp.task('debug', ['compile'], function() {
  return nodemon({
    exec: 'node ./node_modules/.bin/node-debug',
    script: './bin/app.js',
    watch: 'bin',
    args: ['--' + config.env]
  });
});

gulp.task('server', ['compile'], function() {
  return nodemon({
    exec: 'node --harmony',
    script: './bin/app.js',
    watch: 'bin',
    args: ['--' + config.env]
  });
});

gulp.task('compile', ['clean'], function() {
  return gulp.src('src/**/*')
    .pipe(babel())
    .pipe(gulp.dest('bin/'));
});

gulp.task('mocha', function () {
  return gulp.src('./bin/test/*.js', { read: false })
    .pipe(mocha({ reporter: 'list', harmony: true, test: 'true' }));
});

gulp.task('clean', function (cb) {
  return del(['bin/*'], cb);
});

gulp.task('watch:compile', function() {
  return gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('watch:mocha', function() {
  return gulp.watch('bin/**/*.js', debounce(function() {
    runSequence('mocha');
  }, 1000));
});

gulp.task('db:create', function() {
  var conn = knex({ client: config.db.client, connection: { host: config.db.host }});
  return conn.raw('CREATE DATABASE ' + config.db.name)
    .then(function() { return conn.destroy(); });
});

gulp.task('db:drop', function() {
  var conn = knex({ client: config.db.client, connection: { host: config.db.host }});
  return conn.raw('DROP DATABASE ' + config.db.name)
    .then(function() { return conn.destroy(); });
});

gulp.task('db:seed', function() {
  var conn = knex(knexConf);
  return conn.seed.run()
    .then(function() { return conn.destroy(); });
});

gulp.task('db:init', function(cb) {
  return runSequence(
    'db:create',
    'migrate:latest',
    'db:seed',
    cb
  );
});

gulp.task('db:refresh', function(cb) {
  return runSequence(
    'db:drop',
    'db:init',
    cb
  );
});

gulp.task('migrate:latest', function() {
  var conn = knex(knexConf);
  return conn.migrate.latest()
    .then(function() { return conn.destroy(); });
});

gulp.task('migrate:rollback', function() {
  var conn = knex(knexConf);
  return conn.migrate.rollback()
    .then(function() { return conn.destroy(); });
});
