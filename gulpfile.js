'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const exec = require('child_process').exec;
const babel = require('gulp-babel');
const del = require('del');
const seq = require('run-sequence');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');
const spawnMocha = require('gulp-spawn-mocha');
const istanbul = require('gulp-istanbul');
const debounce = require('lodash').debounce;
const env = require('./config').env;
const mochaConf = { reporter: 'dot', harmony: true, env: { 'NODE_ENV': 'test' }, timeout: 15000 };
const db = () => require('./bin/db/db');

gutil.log('gulpfile env: ' + env);

gulp.task('default', ['dev']);
gulp.task('dev', cb => seq(
  'updateSchema',
  'compile',
  'nodemon:debug',
  'mocha',
  'watch:compile',
  'watch:updateSchema',
  'watch:mocha',
  cb
));
gulp.task('compile', cb => seq('clean', 'babel', 'nonJS', cb));
gulp.task('updateSchema:compile', cb => seq('updateSchema', 'compile', cb));
gulp.task('clean', cb => del(['bin/*'], cb));

gulp.task('babel', () => gulp
  .src('src/**/*.js')
  .pipe(babel({
      'plugins': ['./src/build/babelRelayPlugin']
    }))
  .pipe(gulp.dest('bin/'))
);

gulp.task('nonJS', () => gulp
  .src(['!src/**/*.js', 'src/**/*'])
  .pipe(gulp.dest('bin/'))
);

gulp.task('updateSchema', function(cb) {
  exec('./node_modules/.bin/babel-node ./src/db/graphql/updateSchema.js', cb);
});

gulp.task('nodemon:debug', () => nodemon({
  exec: 'node ./node_modules/.bin/node-debug',
  script: './bin/app.js',
  watch: 'bin',
  args: ['--' + env]
}));

gulp.task('nodemon', () => nodemon({
  exec: 'node --harmony',
  script: './bin/app.js',
  watch: 'bin',
  args: ['--' + env]
}));

gulp.task('mocha', () => gulp
  .src(__dirname + '/bin/test/*.js', { read: false })
  .pipe(spawnMocha(mochaConf))
);

gulp.task('coverage', (cb) => {
  gulp.src(['bin/**/*.js'])
    .pipe(istanbul()) 
    .pipe(istanbul.hookRequire())
    .on('finish', () => gulp.src(['bin/test/*.js'])
      .pipe(mocha(mochaConf))
      .pipe(istanbul.writeReports())
      // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
      .on('finish', cb)
    )
});

gulp.task('watch:compile', () => gulp.watch(['src/**/*', '!src/db/graphql/schema.js'], ['compile']));
gulp.task('watch:updateSchema', () => gulp.watch('src/db/graphql/schema.js', ['updateSchema:compile']));
gulp.task('watch:mocha', () => gulp.watch(__dirname + '/bin/**/*.js', debounce(() => seq('mocha'), 1000)));

// must compile before the following
gulp.task('build', ['db:build']);
gulp.task('rebuild', ['db:rebuild']);
gulp.task('db:build', cb => seq('db:create', 'db:migrateLatest', 'db:seed', cb));
gulp.task('db:rebuild', cb => seq('db:drop', 'db:build', cb));
gulp.task('db:create', () => db().create()
  .catch(err => Promise.resolve(gutil.log(err.toString() + ', continuing...')))
);
gulp.task('db:drop', () => db().drop()
  .catch(err => Promise.resolve(gutil.log(err.toString() + ', continuing...')))
);
gulp.task('db:seed', () => db().seed());
gulp.task('db:migrateLatest', () => db().migrateLatest());
gulp.task('db:migrateRollback', () => db().migrateRollback());
