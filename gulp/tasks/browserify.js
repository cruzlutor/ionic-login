/* jslint node: true */

'use strict';

var watchify    = require('watchify'),
    browserify  = require('browserify'),
    gulp        = require('gulp'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    gutil       = require('gulp-util'),
    sourcemaps  = require('gulp-sourcemaps'),
    assign      = require('lodash.assign'),
    connect     = require('gulp-connect');

// add custom browserify options here
var customOpts = {
    entries: ['./app/js/app.js'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));


gulp.task('browserify', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal


function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
           // Add transformation tasks to the pipeline here.
        // .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./app/js/'))

        .pipe(connect.reload());
}