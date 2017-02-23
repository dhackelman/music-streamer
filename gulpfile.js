'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var config = {

    srcJs: ['./src/js/*.js', './src/js/controllers/*.js', './src/js/services/*.js', './src/js/factories/*.js'],
    vendorJs: ['./src/js/vendor/angular.js', './src/js/vendor/angular-ui-router.js', './src/js/vendor/angular-local-storage.js'],
};


gulp.task('js', function() {
    gulp.src(config.srcJs)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./lib/js'));

    gulp.src(config.vendorJs)
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./lib/js/vendor'));
});


gulp.task('watch', function() {
    gulp.watch(config.srcJs, ['js']);
});

gulp.task('default', ['watch']);
