import gulp from 'gulp';
import { resolve } from 'path';
import compileSchema from './utils/compileSchema';

const graphql = resolve(__dirname, '../src/graphql');
const data = resolve(__dirname, '../src/data');

gulp.task('compile', ['compile:schema']);
gulp.task('compile:watch', ['compile:schema', 'compile:schema:watch']);

gulp.task('compile:schema', compileSchema);

gulp.task('compile:schema:watch', () =>
  gulp.watch([`${graphql}/**/*.js`, `${data}/**/*.js`], ['compile:schema'])
);
