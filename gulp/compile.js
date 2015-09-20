import gulp from 'gulp';
import path from 'path';
import { graphql as graphqlConf } from '../config';

gulp.task('watch:updateSchema', () =>
  gulp.watch(path.join(__dirname, `../${graphqlConf.schema}`), ['updateSchema'])
);

gulp.task('updateSchema', cb => {
  require(path.join(__dirname, `../${graphqlConf.updateSchema}`));
  cb();
});