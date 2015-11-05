import gulp from 'gulp';
import { resolve } from 'path';
import updateSchema from '../../src/db/graphql/updateSchema';

const graphql = resolve(__dirname, '../../src/db/graphql');

gulp.task('watch:updateSchema', () =>
  gulp.watch([`${graphql}/**/*.js`, `!${graphql}/schema.json`], ['updateSchema'])
);

gulp.task('updateSchema', updateSchema);
