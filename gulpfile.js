'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer');

var bc = './bower_components/';

gulp.task('js', function() {
    gulp.src('builds/development/app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('builds/dist/app/'));
});

gulp.task('html', function() {
    gulp.src('builds/development/**/*.html')
        .pipe(gulp.dest('builds/dist/'));
});

gulp.task('sass', function() {
    gulp.src('builds/development/sass/**/*')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(csso())
        .pipe(gulp.dest('builds/dist/css/'));
});

gulp.task('img', function() {
    gulp.src('builds/development/img/**/*')
        .pipe(gulp.dest('builds/dist/img/'));
});

gulp.task('fonts', function() {
    gulp.src('builds/development/fonts/**/*')
        .pipe(gulp.dest('builds/dist/fonts/'));
});

gulp.task('watch', function() {
    gulp.watch('builds/development/app/**/*.js', ['js']);
    gulp.watch('builds/development/sass/**/*.scss', ['sass']);
    gulp.watch('builds/development/**/*.html', ['html']);
    gulp.watch('builds/development/img/**/*', ['img']);
});

gulp.task('libs', function() {
    gulp.src(bc + 'jquery/dist/jquery.js')
        .pipe(gulp.dest('./builds/dist/libs/jquery/'));

    gulp.src(bc + 'bootstrap/dist/**/*.*')
        .pipe(gulp.dest('./builds/dist/libs/bootstrap/'));

    gulp.src(bc + 'font-awesome/**/*.*')
        .pipe(gulp.dest('./builds/dist/libs/font-awesome/'));


    gulp.src(bc + 'background-video/jquery.backgroundvideo.min.js')
        .pipe(gulp.dest('./builds/dist/libs/'));

    gulp.src(bc + 'video.js/dist/**/*.*')
        .pipe(gulp.dest('./builds/dist/libs/video-js/'));

});

gulp.task('webserver', function() {
    gulp.src('builds/dist/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', [
    'libs',
    'html',
    'img',
    'js',
    'fonts',
    'sass',
    'webserver',
    'watch'
]);
