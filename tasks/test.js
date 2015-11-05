import gulp from 'gulp';
import { resolve } from 'path';
import seq from 'run-sequence';
import mocha from 'gulp-mocha';
import spawnMocha from 'gulp-spawn-mocha';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-istanbul';
import { debounce } from 'lodash';
import mochaConf from '../test/config';

const rootDir = resolve(__dirname, '../');
const js = resolve(rootDir, '**/*.js');
const src = resolve(rootDir, 'src/**/*.js');
const test = resolve(rootDir, 'test/**/*.js');
const testFiles = resolve(rootDir, 'test/**/*.test.js');
const nodeModules = resolve(rootDir, 'node_modules/**/*');

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
  gulp.src([js, `!${nodeModules}`])
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
