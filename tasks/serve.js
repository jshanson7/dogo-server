import gulp from 'gulp';
import { resolve } from 'path';
import nodemon from 'gulp-nodemon';

const app = resolve(__dirname, '../src');

gulp.task('serve', ['nodemon']);
gulp.task('serve:watch', ['nodemon']);
gulp.task('nodemon', () => nodemon({
  exec: 'node',
  env: { NODE_PATH: app },
  script: app,
  watch: app
}));
