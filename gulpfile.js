'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('sass', function() {
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('jsdoc', shell.task([
	'./node_modules/jsdoc/jsdoc.js ./assets/js/**/*.js'
]));