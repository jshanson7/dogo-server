'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var knex = require('knex');
var config = require('./config');
var knexConf = require('./knexfile');
var env = require('./env');

gulp.task('default', ['debug']);

gulp.task('debug', ['compile', 'watch'], function() {
  return nodemon({
    exec: 'node node_modules/node-inspector/bin/node-debug',
    script: './bin/app.js',
    watch: 'bin',
    args: ['--' + config.env]
  });
});

gulp.task('server', ['compile', 'watch'], function() {
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

gulp.task('watch', function() {
  return gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('clean', function (cb) {
  return del(['bin/*'], cb);
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
