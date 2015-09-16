'use strict';

const gulp = require('./gulp');
const seq = require('run-sequence');
const exec = require('child_process').exec;
const babel = require('gulp-babel');
const del = require('del');
const fromRoot = require('./util/fromRoot');
const graphqlConf = require(fromRoot('./config')).graphql;

gulp.task('compile', cb => seq('clean', 'babel', 'nonJS', cb));
gulp.task('updateSchema:compile', cb => seq('updateSchema', 'compile', cb));

gulp.task('watch:compile', () =>
  gulp.watch([fromRoot('src/**/*'), '!' + fromRoot(graphqlConf.schema)], ['compile'])
);

gulp.task('watch:updateSchema', () =>
  gulp.watch(fromRoot(graphqlConf.schema), ['updateSchema:compile'])
);

gulp.task('clean', cb => del([fromRoot('./bin/*')], cb));

gulp.task('babel', () =>
  gulp
    .src(fromRoot('./src/**/*.js'))
    .pipe(babel({
        'plugins': [fromRoot('gulp/util/babelRelayPlugin')]
      }))
    .pipe(gulp.dest(fromRoot('bin/')))
);

gulp.task('nonJS', () =>
  gulp
    .src(['!' + fromRoot('./src/**/*.js'), fromRoot('./src/**/*')])
    .pipe(gulp.dest(fromRoot('bin/')))
);

gulp.task('updateSchema', cb =>
  exec(
    fromRoot('./node_modules/.bin/babel-node') +
    ' ' +
    fromRoot('./' + graphqlConf.updateSchema),
    cb
  )
);