import gulp from 'gulp';
import gutil from 'gulp-util';
import seq from 'run-sequence';
import {
  create,
  drop,
  seed,
  migrateLatest,
  migrateRollback,
} from '../src/db/db';

gulp.task('db:build', cb => seq('db:create', 'db:migrateLatest', 'db:seed', cb));
gulp.task('db:rebuild', cb => seq('db:drop', 'db:build', cb));

gulp.task('db:create', () =>
  create()
    .catch(err =>
      Promise.resolve(gutil.log(err.toString() + ', continuing...'))
    )
);

gulp.task('db:drop', () =>
  drop()
    .catch(err =>
      Promise.resolve(gutil.log(err.toString() + ', continuing...'))
    )
);

gulp.task('db:seed', () => seed());
gulp.task('db:migrateLatest', () => migrateLatest());
gulp.task('db:migrateRollback', () => migrateRollback());