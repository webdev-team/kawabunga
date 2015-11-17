var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var pixrem = require('gulp-pixrem');
var autoprefixer = require('gulp-autoprefixer');
var swig = require('gulp-swig');
var runSequence = require('run-sequence');
var del = require('del');
var iconfont = require('gulp-iconfont');
var consolidate = require("gulp-consolidate");
var rename = require('gulp-rename');
var base64 = require('gulp-base64');

gulp.task('css', function () {
    return gulp.src('sandbox/**/*.scss')
        .pipe(sass())
        .pipe(base64({
            baseDir: 'assets/scss',
            extensions: ['woff'],
            maxImageSize: 500000,
            debug: true
        }))
        .pipe(autoprefixer())
        .pipe(pixrem())
        .pipe(gulp.dest('build/sandbox'))
});

gulp.task('html', function () {
    return gulp.src(['sandbox/**/*.html'])
        .pipe(swig({defaults: {cache: false}}))
        .pipe(gulp.dest('build/sandbox'))
});

gulp.task('fonts', function () {
    return gulp.src(['assets/fonts/*.*'])
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('iconfont', function () {
    return gulp.src([
            'assets/icons/common/astro/*.svg',
            'assets/icons/common/meteo/*.svg',
            'assets/icons/common/astro/*.svg',
            'assets/icons/common/others/*.svg',
            'assets/icons/common/social/facebook/*.svg',
            'assets/icons/common/social/googleplus/*.svg',
            'assets/icons/common/social/instagram/*.svg',
            'assets/icons/common/social/linkedin/*.svg',
            'assets/icons/common/social/pinterest/*.svg',
            'assets/icons/common/social/twitter/*.svg',
            'assets/icons/common/social/youtube/*.svg',
            'assets/icons/funradio/*.svg',
            'assets/icons/girls/*.svg',
            'assets/icons/rtl/*.svg',
            'assets/icons/rtl2/*.svg'
        ])
        .pipe(iconfont({
            fontName: 'Kawabunga-Icon',
            normalize: true,
            svg: true

        }))
        .on('glyphs', function (glyphs, options) {
            gulp.src('assets/icons/_fonticon.scss.template')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: 'Kawabunga-Icon',
                    fontPath: '../fonts/',
                    className: 'icon'
                }))
                .pipe(rename('_fonticon.scss'))
                .pipe(gulp.dest('assets/scss/'));
        })
        .pipe(gulp.dest('assets/fonts/'))
});

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('build', function (cb) {
    runSequence('clean', ['css', 'html'], cb);
});

gulp.task('watch', function () {
    gulp.watch('sandbox/**/*.html', ['html']);
    gulp.watch(['sandbox/**/*.scss', 'assets/**/*.scss'], ['css']);
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

gulp.task('work', ['css', 'html', 'fonts', 'webserver', 'watch']);
