"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var cleancss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("practice", function (done) {
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

gulp.task("practice:watch", function (done) {
  gulp.watch("scss/*.scss", gulp.series("practice"));
  gulp.watch("scss/common/*.scss", gulp.series("practice"));
  gulp.watch("scss/components/*.scss", gulp.series("practice"));
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
