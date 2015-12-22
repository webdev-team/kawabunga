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
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var gulpif = require('gulp-if');

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

/*
 * Sprites & Img
 *
 * Sprite TODO : test and go in single config via spriteRetina possibility with spritesmith... more convenient for building
 * Maybe a little awkward in img for the handle. To be tested.
 */

gulp.task('sprite:x1', function () {
    return gulp.src('assets/img/sprite-partners/*.png')
        .pipe(spritesmith({
            imgName     : 'sprite-partners.png',
            cssName     : 'sprite-partners.scss',
            padding     : 2,
            cssFormat   : 'scss',
            algorithm   : 'left-right',
            imgPath     : '../img/sprite-partners.png',
            cssSpritesheetName : 'sprite-partners'
        }))
        /*.on('glyphs', function (glyphs, options) {
            gulp.src('assets/img/sprite-partners/_sprite-partners.scss.template')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: 'test',
                    fontPath: '../img/sprite-partners/',
                    className: 'sp'
                }))
                .pipe(rename('_sprite-partners.scss'))
                .pipe(gulp.dest('assets/scss/partial/'));
        })*/
        .pipe(gulpif('*.png', gulp.dest('assets/img'), gulp.dest('assets/scss/spritesmith/')))
});
gulp.task('sprite:x2', function () {
    return gulp.src('assets/img/sprite-retina-partners/*.png')
        .pipe(spritesmith({
            imgName     : 'sprite-retina-partners.png',
            cssName     : 'sprite-retina-partners.scss',
            padding     : 4,
            cssFormat   : 'scss',
            algorithm   : 'left-right',
            imgPath     : '../img/sprite-retina-partners.png',
            cssSpritesheetName : 'sprite-retina-partners'
        }))
        .pipe(gulpif('*.png', gulp.dest('assets/img'), gulp.dest('assets/scss/spritesmith/')))
});
gulp.task('img', function () {
    return gulp.src(['assets/img/**', '!assets/img/sprite-partners/**', '!assets/img/sprite-retina-partners/**', '!assets/img/**/init.gif'])
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))
});

/*
 * Fonts
 */

gulp.task('font', function () {
    return gulp.src(['assets/font/*.*'])
        .pipe(gulp.dest('build/font'))
});

/*
 * IconFonts
 */

gulp.task('iconfont', function () {
    return gulp.src([
            'assets/icon/common/astro/*.svg',
            'assets/icon/common/meteo/*.svg',
            'assets/icon/common/astro/*.svg',
            'assets/icon/common/others/*.svg',
            'assets/icon/common/social/facebook/*.svg',
            'assets/icon/common/social/googleplus/*.svg',
            'assets/icon/common/social/instagram/*.svg',
            'assets/icon/common/social/linkedin/*.svg',
            'assets/icon/common/social/pinterest/*.svg',
            'assets/icon/common/social/twitter/*.svg',
            'assets/icon/common/social/youtube/*.svg',
            'assets/icon/funradio/*.svg',
            'assets/icon/girls/*.svg',
            'assets/icon/rtl/*.svg',
            'assets/icon/rtl2/*.svg'
        ])
        .pipe(iconfont({
            fontName: 'Kawabunga-Icon',
            normalize: true,
            svg: true

        }))
        .on('glyphs', function (glyphs, options) {
            gulp.src('assets/icon/_fonticon.scss.template')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: 'Kawabunga-Icon',
                    fontPath: '../font/',
                    className: 'icon'
                }))
                .pipe(rename('_fonticon.scss'))
                .pipe(gulp.dest('assets/scss/'));
        })
        .pipe(gulp.dest('assets/font/'))
});

/*
 * WatchTask
 */

gulp.task('watch', function () {
    gulp.watch('sandbox/**/*.html', ['html']);
    gulp.watch('sandbox/img/**', ['img']);
    gulp.watch(['sandbox/**/*.scss', 'assets/**/*.scss'], ['css']);
});

/*
 * WebServer
 */

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

// CUSTOM TASKS :

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('build', function (cb) {
    runSequence('clean', 'sprite:x1', 'sprite:x2', ['img', 'iconfont', 'css', 'font'], ['html'], cb);
});

gulp.task('work', ['img', 'iconfont', 'css', 'font', 'html', 'webserver', 'watch']);
