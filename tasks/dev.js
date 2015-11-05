import gulp from 'gulp';
import seq from 'run-sequence';

gulp.task('default', ['dev']);

gulp.task('dev', cb =>
  seq(
    'compile:schema',
    'lint',
    'mocha',
    'nodemon',
    'watch:compile:schema',
    'watch:test',
    cb
  )
);
