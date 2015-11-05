import gulp from 'gulp';

gulp.task('build', ['db:build', 'compile']);
gulp.task('rebuild', ['db:rebuild', 'compile']);
