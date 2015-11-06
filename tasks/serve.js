import gulp from 'gulp';
import { resolve } from 'path';
import nodemon from 'gulp-nodemon';

const app = resolve(__dirname, '../src');

gulp.task('serve', ['node']);
gulp.task('serve:watch', ['nodemon']);
gulp.task('node', () => require(app));
gulp.task('nodemon', () => nodemon({ exec: 'node', script: app, watch: app }));
