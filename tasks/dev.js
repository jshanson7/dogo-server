import gulp from 'gulp';
import seq from 'run-sequence';

gulp.task('default', ['dev']);

gulp.task('dev', cb =>
  seq(
    'updateSchema',
    'lint',
    'mocha',
    'nodemon',
    'watch:updateSchema',
    'watch:test',
    cb
  )
);
