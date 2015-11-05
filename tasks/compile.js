import gulp from 'gulp';
import { resolve } from 'path';
import compileSchema from '../src/db/graphql/compileSchema';

const graphql = resolve(__dirname, '../src/db/graphql');

gulp.task('compile:schema', compileSchema);

gulp.task('watch:compile:schema', () =>
  gulp.watch([`${graphql}/**/*.js`, `!${graphql}/schema.json`], ['compileSchema'])
);
