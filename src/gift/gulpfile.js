'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
// var cleancss = require('gulp-cleancss');
// lint 참고 https://github.com/CSSLint/csslint/wiki/

gulp.task('gift', function (done) {
    gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({sourcemap: true, outputStyle: 'expanded'}).on('error', sass.logError))
        // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(cleancss({format: 'keep-breaks' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('../../../css/svc'));
    done();
});
gulp.task('gift:watch', function (done) {
    gulp.watch('scss/*.scss', gulp.series('gift'));
    gulp.watch('scss/common/*.scss', gulp.series('gift'));
    gulp.watch('scss/component/*.scss', gulp.series('gift'));
    gulp.watch('scss/modules/*.scss', gulp.series('gift'));
    done();
});
