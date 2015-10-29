/* jslint node: true */

'use strict';

var gulp = require('gulp');


gulp.task('watch', function(){
    gulp.watch('./app/css/**/*.sass', ['sass']);
    // gulp.watch('./assets/js/main.js', ['scripts']);
    gulp.watch(['./app/views/**/*.html', './app/*.html'], ['html']);
});
