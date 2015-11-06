import gulp from 'gulp';
import seq from 'run-sequence';

gulp.task('default', ['dev']);

gulp.task('dev', cb =>
  seq('compile:watch', 'test:watch', 'serve:watch', cb)
);
