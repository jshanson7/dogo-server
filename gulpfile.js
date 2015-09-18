require('babel/register');

const gutil = require('gulp-util');
const env = require('./config').env;

gutil.log('gulpfile env:', gutil.colors.green(env));
require('./gulp');