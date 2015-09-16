'use strict';

const gulp = require('./gulp');
const gutil = require('gulp-util');
const seq = require('run-sequence');
const fromRoot = require('./util/fromRoot');
const db = () => require(fromRoot('./bin/db/db'));

// must compile before the following tasks
gulp.task('db:build', cb =>seq('db:create', 'db:migrateLatest', 'db:seed', cb));
gulp.task('db:rebuild', cb =>seq('db:drop', 'db:build', cb));

gulp.task('db:create', () =>
  db()
    .create()
    .catch(err =>
      Promise.resolve(gutil.log(err.toString() + ', continuing...'))
    )
);

gulp.task('db:drop', () =>
  db()
    .drop()
    .catch(err =>
      Promise.resolve(gutil.log(err.toString() + ', continuing...'))
    )
);

gulp.task('db:seed', () => db().seed());
gulp.task('db:migrateLatest', () => db().migrateLatest());
gulp.task('db:migrateRollback', () => db().migrateRollback());