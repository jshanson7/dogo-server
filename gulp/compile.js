import gulp from 'gulp';
import path from 'path';
import { exec } from 'child_process';
import { graphql as graphqlConf } from '../config';

gulp.task('watch:updateSchema', () =>
  gulp.watch(path.join(__dirname, `../${graphqlConf.schema}`), ['updateSchema'])
);

gulp.task('updateSchema', cb =>
  exec(
    path.join(__dirname, '../node_modules/.bin/babel-node') +
    ' ' +
    path.join(__dirname, `../${graphqlConf.updateSchema}`),
    cb
  )
);