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
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var eventStream = require('event-stream');
var watchify = require('watchify');
var mocha = require('gulp-mocha');
var _ = require('lodash');
var flatten = require('gulp-flatten');

gulp.task('css', function () {
    return gulp.src('sandbox/**/*.scss')
        .pipe(sass())
        .pipe(base64({
            baseDir: 'assets/scss',
            extensions: ['woff'],
            maxImageSize: 500000,
            debug: false
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

gulp.task('js', function(done) {
    glob('sandbox/js/pages/*.js', function(err, files) {
        if (err) {
            done(err);
        }

        var tasks = files.map(function(entry) {
            return browserifyFile(entry)
                .bundle()
                .on('error', function(err) {
                    gutil.log(err);
                    this.emit('end'); // end this stream
                })
                .pipe(source(entry))
                .pipe(flatten())
                .pipe(gulp.dest('build/sandbox/js/pages'));
        });

        eventStream.merge(tasks).on('end', done);
    })
});

var browserifyFile = function(file) {
    var customOpts = {
        entries: [file]
    };

    var opts = _.assign({}, watchify.args, customOpts);

    return browserify(opts)
};

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
            cssName     : '_sprite-partners.scss',
            padding     : 2,
            cssFormat   : 'scss',
            algorithm   : 'left-right',
            imgPath     : '../../../img/sprite-partners.png',
            cssSpritesheetName : 'sprite-partners'
        }))
        .pipe(gulpif('*.png', gulp.dest('assets/img'), gulp.dest('assets/scss/sprites')))
});

gulp.task('sprite:x2', function () {
    return gulp.src('assets/img/sprite-retina-partners/*.png')
        .pipe(spritesmith({
            imgName     : 'sprite-retina-partners.png',
            cssName     : '_sprite-retina-partners.scss',
            padding     : 4,
            cssFormat   : 'scss',
            algorithm   : 'left-right',
            imgPath     : '../../../img/sprite-retina-partners.png',
            cssSpritesheetName : 'sprite-retina-partners'
        }))
        .pipe(gulpif('*.png', gulp.dest('assets/img'), gulp.dest('assets/scss/sprites')))
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
    gulp.watch(['sandbox/js/**/*.js', 'assets/**/*.js'], ['js']);
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

/*
 * Tests
 */

gulp.task('test', function () {
    return gulp.src('test/**/*-test.js')
        .pipe(mocha())
        .once('end', function () {
            process.exit();
        });
});

// CUSTOM TASKS :

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('compile', ['sprite:x1', 'sprite:x2', 'img', 'css', 'font', 'js', 'html']);

gulp.task('build', function(cb) {
    runSequence('clean', 'compile', cb);
});

gulp.task('work', ['compile', 'webserver', 'watch']);
