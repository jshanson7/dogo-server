import gulp from 'gulp';
import seq from 'run-sequence';

gulp.task('default', ['dev']);

gulp.task('dev', cb =>
  seq(
    'compile',
    'test',
    'serve',
    'compile:watch',
    'test:watch',
    cb
  )
);
