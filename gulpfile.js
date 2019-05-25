const gulp = require('gulp');
const babel = require('gulp-babel');
const rimraf = require('gulp-rimraf');

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
        .pipe(gulp.dest('dist'));
    done();
});

//default-task
gulp.task('default', gulp.series('rimraf', 'distribute', function watcher() {
    gulp.watch(scriptSelectorSrc, gulp.series('rimraf', 'distribute'));
}));