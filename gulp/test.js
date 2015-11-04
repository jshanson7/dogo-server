import gulp from 'gulp';
import path from 'path';
import seq from 'run-sequence';
import mocha from 'gulp-mocha';
import spawnMocha from 'gulp-spawn-mocha';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-istanbul';
import { debounce } from 'lodash';
import { mocha as mochaConf } from '../config';

const src = path.join(__dirname, '../src/**/*.js');
const test = path.join(__dirname, '../test/**/*.js');
const testFiles = path.join(__dirname, '../test/**/*.test.js');

gulp.task('watch:test', () =>
  gulp.watch([src, test], debounce(() =>
    seq('lint', 'mocha'), 1000)
  )
);

gulp.task('mocha', () =>
  gulp
    .src(testFiles, { read: false })
    .pipe(spawnMocha(mochaConf))
);

gulp.task('lint', function () {
  return gulp.src([src, test])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('coverage', (cb) =>
  gulp.src([src, test])
    .pipe(istanbul()) 
    .pipe(istanbul.hookRequire())
    .on('finish', () =>
      gulp
        .src(testFiles)
        .pipe(mocha(mochaConf))
        .pipe(istanbul.writeReports())
        // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .on('finish', cb)
    )
);