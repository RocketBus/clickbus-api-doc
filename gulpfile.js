'use strict';

const gulp      = require('gulp');
const gutils    = require('gulp-util');
const del       = require('del');
const s3        = require('knox');
const aglio     = require('gulp-aglio');

/**************************************
 * Parameters
 **************************************/
const gulpParameters = require('./parameters/gulp/parameters.json');

/**************************************
 * Main Task
 *************************************/

gulp.task('build', ['clean', 'compile', 'cp-img']);
gulp.task('publish', ['upload']);
gulp.task('default', ['build']);

/**************************************
 * Secondary and Auxiliary Task
 *************************************/

/**
 * Watch
 */
gulp.task('watch', ['build'], function () {
    gulp.watch(['source.md']);
});

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('compile', function () {
    return gulp.src('index.md')
        .pipe(aglio({ template: 'default' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('cp-img', ['clean'], function () {
    return gulp.src(['img','favicon.ico'])
        .pipe(gulp.dest('dist'));
});

gulp.task('upload', ['build'], function () {
    const filesNames = ['index.html', 'favicon.ico', 'img'];
    const aws = {
        key: gulpParameters.awsS3Key,
        secret: gulpParameters.awsS3secret,
        bucket: gulpParameters.awsS3Bucket
    };
    var originDir = './dist';
    var destinationDir = '/';

    filesNames.forEach(function (fileName) {
        s3.createClient(aws)
            .putFile(originDir + '/' + fileName, destinationDir + '/' + fileName, function (e, a) {
                if (e !== null) {
                    console.log(e);
                }
                gutils.log('Url \'' + a.req.url + '\'');
                a.resume();
            });
    });
});
