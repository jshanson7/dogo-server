import gulp from 'gulp';
import gutil from 'gulp-util';
import seq from 'run-sequence';
import db from '../src/db/db';

gulp.task('db:build', cb => seq('db:create', 'db:migrateLatest', 'db:seed', cb));
gulp.task('db:rebuild', cb => seq('db:drop', 'db:build', cb));

gulp.task('db:create', () =>
  db
    .create()
    .catch(err =>
      Promise.resolve(gutil.log(err.toString() + ', continuing...'))
    )
);

gulp.task('db:drop', () =>
  db
    .drop()
    .catch(err =>
      Promise.resolve(gutil.log(err.toString() + ', continuing...'))
    )
);

gulp.task('db:seed', () => db.seed());
gulp.task('db:migrateLatest', () => db.migrateLatest());
gulp.task('db:migrateRollback', () => db.migrateRollback());