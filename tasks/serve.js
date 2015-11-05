import gulp from 'gulp';
import { resolve } from 'path';
import nodemon from 'gulp-nodemon';
import { env } from '../src/config';

const app = resolve(__dirname, '../src/index.js');
const src = resolve(__dirname, '../src');

gulp.task('serve', ['nodemon']);

gulp.task('nodemon', () =>
  nodemon({
    exec: 'node --harmony',
    script: app,
    watch: src,
    args: ['--' + env]
  })
);
