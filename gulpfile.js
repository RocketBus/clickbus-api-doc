'use strict';

const gulp      = require('gulp');
const gutils    = require('gulp-util');
const del       = require('del');
const s3        = require('knox');
const aglio     = require('gulp-aglio');
const fs        = require('fs');
const recusive  = require('recursive-readdir');

/**************************************
 * Parameters
 **************************************/
const gulpParameters = require('./parameters/gulp/parameters.json');
const pack      = require('./package.json');

/**************************************
 * Main Task
 *************************************/

gulp.task('build', ['clean', 'compile', 'cp']);
gulp.task('publish', ['upload']);
gulp.task('default', ['build']);

/**************************************
 * Secondary and Auxiliary Task
 *************************************/

gulp.task('cp', ['cp-img', 'cp-favicon']);

/**
 * Watch
 */
gulp.task('watch', ['build'], function () {
    gulp.watch(['src/*/**']);
});

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('compile', function () {
    return gulp.src('src/*/**/index.md')
        .pipe(aglio({ template: 'default' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('cp-img', ['clean'], function () {
    return gulp.src(['img/*'])
        .pipe(gulp.dest('dist/img'));
});

gulp.task('cp-favicon', ['clean'], function () {
   return gulp.src('favicon.ico')
       .pipe(gulp.dest('dist'));
});

gulp.task('upload', ['build'], function () {
    const aws = {
        key: gulpParameters.awsS3Key,
        secret: gulpParameters.awsS3secret,
        bucket: gulpParameters.awsS3Bucket
    };

    recusive('./dist', function (error, files) {

        files.forEach(function (file) {
            console.log('Uploading: ' + file);
            s3.createClient(aws)
                .putFile(file, file.replace('dist', ''), function (e, a) {
                    if (e !== null) {
                        console.log(e);
                    }
                    gutils.log('Url \'' + a.req.url + '\'');
                    a.resume();
                });
        });
    });
});
