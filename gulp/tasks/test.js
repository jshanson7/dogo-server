import gulp from 'gulp';
import { join } from 'path';
import seq from 'run-sequence';
import mocha from 'gulp-mocha';
import spawnMocha from 'gulp-spawn-mocha';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-istanbul';
import { debounce } from 'lodash';
import { mocha as mochaConf } from '../../config';

const root = join(__dirname, '../../');
const src = join(__dirname, '../../src/**/*.js');
const test = join(__dirname, '../../test/**/*.js');
const testFiles = join(__dirname, '../../test/**/*.test.js');

gulp.task('watch:test', () =>
  gulp.watch([src, test], debounce(() =>
    seq('lint', 'mocha'), 1000)
  )
);

gulp.task('mocha', () =>
  gulp.src(testFiles, { read: false })
    .pipe(spawnMocha(mochaConf))
);

gulp.task('lint', () =>
  gulp.src([root])
    .pipe(eslint())
    .pipe(eslint.format())
);

gulp.task('coverage', (cb) =>
  gulp.src([src, test])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () =>
      gulp.src(testFiles)
        .pipe(mocha(mochaConf))
        .pipe(istanbul.writeReports())
        // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .on('finish', cb)
    )
);
