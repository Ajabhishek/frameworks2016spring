var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

gulp.task("sass", function(){
    gulp.src("./sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./css/")); 
});

gulp.task('browser-sync', function() {
    browserSync({
        files: ["./*.html", "./css/*.css"],
        server: {
            baseDir: "./" 
        },
        browser: ["google chrome", "firefox"]
    });
});

gulp.task('default', ["browser-sync"], function() {
  gulp.watch('./sass/**/*.scss',['sass']);
});




