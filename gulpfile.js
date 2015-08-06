'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const seq = require('run-sequence');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-spawn-mocha');
const knex = require('knex');
const debounce = require('lodash').debounce;
const config = require('./config');
const knexConf = require('./knexfile');
const pgConn = knex({ client: config.db.client, connection: { host: config.db.host } });
const getAppDBConn = () => knex(knexConf);

gulp.task('default', ['dev']);
gulp.task('dev', cb => seq('compile', 'nodemon:debug', 'mocha', 'watch:compile', 'watch:mocha', cb));
gulp.task('build', ['db:build']);
gulp.task('build:dev', cb => seq('db:build', 'db:seed', 'dev', cb));
gulp.task('rebuild:dev', cb => seq('db:drop', 'build:dev', cb));

gulp.task('compile', ['clean'], () => gulp
  .src('src/**/*')
  .pipe(babel())
  .pipe(gulp.dest('bin/'))
);

gulp.task('nodemon:debug', () => nodemon({
  exec: 'node ./node_modules/.bin/node-debug',
  script: './bin/app.js',
  watch: 'bin',
  args: ['--' + config.env]
}));

gulp.task('nodemon', () => nodemon({
  exec: 'node --harmony',
  script: './bin/app.js',
  watch: 'bin',
  args: ['--' + config.env]
}));

gulp.task('mocha', () => gulp
  .src('./bin/test/*.js', { read: false })
  .pipe(mocha({ reporter: 'dot', harmony: true, test: 'true' }))
);

gulp.task('clean', cb => del(['bin/*'], cb));
gulp.task('watch:compile', () => gulp.watch('src/**/*.js', ['compile']));
gulp.task('watch:mocha', () => gulp.watch('bin/**/*.js', debounce(() => seq('mocha'), 1000)));
gulp.task('db:build', cb => seq('db:create', 'migrate:latest', cb));
gulp.task('db:rebuild', cb => seq('db:drop', 'db:build', cb));
gulp.task('db:create', cb => pgConn.raw('CREATE DATABASE ' + config.db.name));
gulp.task('db:drop', cb => pgConn.raw('DROP DATABASE ' + config.db.name));

gulp.task('migrate:latest', () => {
  const conn = getAppDBConn();
  return conn.migrate.latest().then(() => conn.destroy());
});

gulp.task('migrate:rollback', () => {
  const conn = getAppDBConn();
  return conn.migrate.rollback().then(() => conn.destroy());
});

gulp.task('db:seed', () => {
  const conn = getAppDBConn();
  return conn.seed.run().then(() => conn.destroy());
});
