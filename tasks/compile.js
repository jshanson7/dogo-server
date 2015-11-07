import gulp from 'gulp';
import { resolve } from 'path';
import compileSchema from './utils/compileSchema';

const graphql = resolve(__dirname, '../src/db/graphql');

gulp.task('compile', ['compile:schema']);
gulp.task('compile:watch', ['compile:schema', 'compile:schema:watch']);

gulp.task('compile:schema', compileSchema);

gulp.task('compile:schema:watch', () =>
  gulp.watch([`${graphql}/**/*.js`, `!${graphql}/schema.json`], ['compile:schema'])
);
