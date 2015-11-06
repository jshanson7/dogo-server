import gulp from 'gulp';
import { resolve } from 'path';
import seq from 'run-sequence';
import mocha from 'gulp-mocha';
import spawnMocha from 'gulp-spawn-mocha';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-babel-istanbul';
import { debounce } from 'lodash';
import mochaConf from '../test/config';

const js = resolve(__dirname, '../**/*.js');
const src = resolve(__dirname, '../src/**/*.js');
const test = resolve(__dirname, '../test/**/*.js');
const testFiles = resolve(__dirname, '../test/**/*.test.js');
const nodeModules = resolve(__dirname, '../node_modules/**/*');
const coverage = resolve(__dirname, '../coverage/**/*');

gulp.task('test', ['lint', 'mocha']);

gulp.task('test:watch', ['test'], () =>
  gulp.watch([src, test], debounce(() =>
    seq('test'), 1000)
  )
);

gulp.task('lint', () =>
  gulp.src([js, `!${nodeModules}`, `!${coverage}`])
    .pipe(eslint())
    .pipe(eslint.format())
);

gulp.task('mocha', () =>
  gulp.src(testFiles, { read: false })
    .pipe(spawnMocha(mochaConf))
);

gulp.task('cover', cb => {
  gulp.src(src)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () =>
      gulp.src(testFiles)
        .pipe(mocha(Object.assign({}, mochaConf, { reporter: 'spec' })))
        .pipe(istanbul.writeReports())
        // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
        .on('end', () => { cb(); process.exit(); })
        .on('error', err => { cb(err); process.exit(1); })
    );
});
