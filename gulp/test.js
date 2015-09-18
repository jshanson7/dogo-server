import gulp from 'gulp';
import path from 'path';
import seq from 'run-sequence';
import mocha from 'gulp-mocha';
import spawnMocha from 'gulp-spawn-mocha';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-istanbul';
import { debounce } from 'lodash';
import { mocha as mochaConf } from '../config';

gulp.task('watch:test', () =>
  gulp.watch(path.join(__dirname, '../src/**/*.js'), debounce(() =>
    seq('lint', 'mocha'), 1000)
  )
);

gulp.task('mocha', () =>
  gulp
    .src(path.join(__dirname, '../src/test/*.js'), { read: false })
    .pipe(spawnMocha(mochaConf))
);

gulp.task('lint', function () {
  return gulp.src(path.join(__dirname, '../src/**/*.js'))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('coverage', (cb) =>
  gulp.src(['../src/**/*.js'])
    .pipe(istanbul()) 
    .pipe(istanbul.hookRequire())
    .on('finish', () =>
      gulp
        .src(['../src/test/*.js'])
        .pipe(mocha(mochaConf))
        .pipe(istanbul.writeReports())
        // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .on('finish', cb)
    )
);