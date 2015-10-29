'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('scripts', function () {
    gulp.src('./app/js/main.js')
    .pipe(connect.reload());
});