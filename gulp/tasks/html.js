'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('html', function () {
    gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});