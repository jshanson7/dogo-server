'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var isProduction = !!argv.production;
var babel = require('gulp-babel');
var del = require('del');
var nodemon = require('gulp-nodemon');
var knex = require('knex');
var knexConf = require('./knexfile')[isProduction ? 'produciton' : 'development'];
var runSequence = require('run-sequence');

gulp.task('default', ['debug']);

gulp.task('debug', ['compile', 'watch'], function() {
  return nodemon({
    exec: 'node-debug',
    script: './lib/app.js',
    watch: 'lib'
  });
});

gulp.task('server', ['compile', 'watch'], function() {
  return nodemon({
    exec: 'node --harmony',
    script: './lib/app.js',
    watch: 'lib'
  });
});

gulp.task('compile', ['clean'], function() {
  return gulp.src('src/**/*')
    .pipe(babel())
    .pipe(gulp.dest('lib/'));
});

gulp.task('watch', function() {
  return gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('clean', function (cb) {
  return del(['lib/*'], cb);
});

gulp.task('db:create', function() {
  var conn = knex({ client: knexConf.client, connection: { host: '127.0.0.1' }});
  return conn.raw('CREATE DATABASE ' + knexConf.connection.database)
    .then(function() { return conn.destroy(); });
});

gulp.task('db:drop', function() {
  var conn = knex({ client: knexConf.client, connection: { host: '127.0.0.1' }});
  return conn.raw('DROP DATABASE ' + knexConf.connection.database)
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
