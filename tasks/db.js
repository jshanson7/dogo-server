import gulp from 'gulp';
import { log } from 'gulp-util';
import seq from 'run-sequence';
import {
  create,
  drop,
  seed,
  migrateLatest,
  migrateRollback
} from 'db';

gulp.task('db:build', cb => seq('db:create', 'db:migrate:latest', 'db:seed', cb));
gulp.task('db:rebuild', cb => seq('db:drop', 'db:build', cb));

gulp.task('db:create', () =>
  create().catch(err =>
    Promise.resolve(log(err.toString() + ', continuing...'))
  )
);

gulp.task('db:drop', () =>
  drop().catch(err =>
    Promise.resolve(log(err.toString() + ', continuing...'))
  )
);

gulp.task('db:seed', seed);
gulp.task('db:migrate:latest', migrateLatest);
gulp.task('db:migrate:rollback', migrateRollback);
