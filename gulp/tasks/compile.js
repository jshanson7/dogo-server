import gulp from 'gulp';
import { join } from 'path';
import { graphql as graphqlConf } from '../../config';

gulp.task('watch:updateSchema', () =>
  gulp.watch(join(__dirname, `../../${graphqlConf.schema}`), ['updateSchema'])
);

gulp.task('updateSchema', cb => {
  require(join(__dirname, `../../${graphqlConf.updateSchema}`));
  cb();
});
