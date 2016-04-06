var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var config      = require('./gulp.config')();

gulp.task("sass", function(){
    gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.css)); 
});

gulp.task('browser-sync', function() {
    browserSync({
        files: config.browserSyncFiles,
        server: {
            baseDir: config.baseDir 
        },
        browser: config.browsers
    });
});

gulp.task('build', function() {
  gulp.src("./js/*.js")
      .pipe(concat("all.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./dist/"));
});

gulp.task('default', ["browser-sync"], function() {
  gulp.watch('./sass/**/*.scss',['sass']);
});




