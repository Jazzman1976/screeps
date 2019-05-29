const gulp = require('gulp');
const babel = require('gulp-babel');
const rimraf = require('gulp-rimraf');
const flatten = require('gulp-dot-flatten');
const screeps = require('gulp-screeps');
// const credentials_local = require('./credentials_local');

const scriptSelectorSrc = 'src/**/*.js';
const scriptSelectorDist = 'dist/**/*.js';

gulp.task('rimraf', (done) => {
    gulp.src(scriptSelectorDist, { read: false })
        .pipe(rimraf());
    done();
});

gulp.task('distribute', (done) => {
    gulp.src(scriptSelectorSrc)
        .pipe(babel())
        .pipe(flatten())
        .pipe(gulp.dest('dist'));
    done();
});

/*
gulp.task('publish_local', (done) => {
    gulp.src(scriptSelectorDist)
        .pipe(screeps(credentials_local));
    done();
});
*/

//default-task
gulp.task('default', gulp.series('rimraf', 'distribute', function watcher() {
    gulp.watch(scriptSelectorSrc, gulp.series('rimraf', 'distribute'));
}));