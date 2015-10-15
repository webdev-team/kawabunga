var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var pixrem = require('gulp-pixrem');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function () {
    return gulp.src('sandbox/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(pixrem())
      .pipe(gulp.dest('build/sandbox'))
});

gulp.task('html', function() {
    return gulp.src(['sandbox/**/*.html'])
        .pipe(gulp.dest('build/sandbox'))
});

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('build', function (cb) {
    runSequence('clean', ['css', 'html'], cb);
});

gulp.task('watch', function () {
    gulp.watch('sandbox/**/*.html', ['html']);
    gulp.watch('sandbox/**/*.scss', ['css']);
});

gulp.task('webserver', function () {
    return gulp.src('./')
        .pipe(webserver({
            livereload: false,
            directoryListing: true,
            port: 8282,
            host: '0.0.0.0',
            open: true
        }))
});

gulp.task('work', ['css', 'html', 'webserver', 'watch']);
