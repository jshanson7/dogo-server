import gulp from 'gulp';
import { resolve } from 'path';

const graphql = resolve(__dirname, '../../src/db/graphql');
const updateSchema = () => require(resolve(graphql, 'updateSchema'))();

gulp.task('watch:updateSchema', () =>
  gulp.watch([`${graphql}/**/*.js`, `!${graphql}/schema.json`], ['updateSchema'])
);

gulp.task('updateSchema', updateSchema);
