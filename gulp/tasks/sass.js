/* jslint node: true */

'use strict';
 
var gulp    = require('gulp');
var sass    = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
    gulp.src('./app/css/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'))
        .pipe(connect.reload());
});