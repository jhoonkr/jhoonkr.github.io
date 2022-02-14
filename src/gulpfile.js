"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var cleancss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("pf", function (done) {
  gulp
    .src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ sourcemap: true, outputStyle: "expanded" }).on(
        "error",
        sass.logError
      )
    )
    // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleancss({ format: "keep-breaks" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./css"));
  done();
});

gulp.task("pf:watch", function (done) {
  gulp.watch("scss/*.scss", gulp.series("pf"));
  gulp.watch("scss/common/*.scss", gulp.series("pf"));
  gulp.watch("scss/components/*.scss", gulp.series("pf"));
  done();
});

// portpolio

gulp.task("pr", function (done) {
  gulp
    .src("portfolio/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ sourcemap: true, outputStyle: "expanded" }).on(
        "error",
        sass.logError
      )
    )
    // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleancss({ format: "keep-breaks" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./css"));
  done();
});

gulp.task("pr:watch", function (done) {
  gulp.watch("portfolio/scss/*.scss", gulp.series("pr"));
  gulp.watch("portfolio/scss/common/*.scss", gulp.series("pr"));
  gulp.watch("portfolio/scss/components/*.scss", gulp.series("pr"));
  done();
});

gulp.task("newpf", function (done) {
  gulp
    .src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ sourcemap: true, outputStyle: "expanded" }).on(
        "error",
        sass.logError
      )
    )
    // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleancss({ format: "keep-breaks" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./css"));
  done();
});

gulp.task("newpf:watch", function (done) {
  gulp.watch("scss/*.scss", gulp.series("newpf"));
  gulp.watch("scss/common/*.scss", gulp.series("newpf"));
  gulp.watch("scss/components/*.scss", gulp.series("newpf"));
  done();
});

// ionyou
gulp.task('ionyou', function (done) {
  gulp.src('ionyou/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(gulpsass({sourcemap: true, outputStyle: 'expanded'}).on('error', gulpsass.logError))
      // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
      .pipe(cleancss({format: 'keep-breaks' }))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./ionyou/css'));
  done();
});
gulp.task('ionyou:watch', function (done) {
  gulp.watch('ionyou/scss/*.scss', gulp.series('ionyou'));
  done();
});

// landing

gulp.task("landing", function (done) {
  gulp
    .src("landing/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ sourcemap: true, outputStyle: "expanded" }).on(
        "error",
        sass.logError
      )
    )
    // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleancss({ format: "keep-breaks" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./landing/css"));
  done();
});

gulp.task("landing:watch", function (done) {
  gulp.watch("landing/scss/*.scss", gulp.series("landing"));
  done();
});