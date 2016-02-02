var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var pixrem = require('gulp-pixrem');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var del = require('del');
var iconfont = require('gulp-iconfont');
var consolidate = require("gulp-consolidate");
var rename = require('gulp-rename');
var base64 = require('gulp-base64');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var eventStream = require('event-stream');
var watchify = require('watchify');
var mocha = require('gulp-mocha');
var _ = require('lodash');
var flatten = require('gulp-flatten');
var gutil = require('gulp-util');
var ejs = require('gulp-ejs');
var replace = require('gulp-replace');

var package = require('./package.json');
require('gulp-rtl-publish')(gulp, package);

gulp.task('css', function () {
    return gulp.src('sandbox/scss/*.scss')
        .pipe(sass())
        .pipe(base64({
            baseDir: 'assets/scss',
            extensions: ['woff'],
            maxImageSize: 500000,
            debug: false
        }))
        .pipe(autoprefixer())
        .pipe(pixrem())
        .pipe(gulp.dest('build/sandbox/css'))
});

gulp.task('html', function () {
    return gulp.src(['sandbox/**/*.html', '!sandbox/**/_*.html'])
        .pipe(ejs({}))
        .on('error', function(err) {
            gutil.log(err);
            this.emit('end'); // end this stream
        })
        .pipe(gulp.dest('build/sandbox'));
});

gulp.task('js', function(done) {
    glob('sandbox/js/*.js', function(err, files) {
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
                .pipe(gulp.dest('build/sandbox/js'));
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

gulp.task('sprite', function () {
    var spriteData = gulp.src('assets/sprite/partners/*.png')
        .pipe(spritesmith({
            cssName: '_sprite-partners.scss',
            cssFormat: 'css_retina',
            algorithm: 'left-right',
            imgName: 'sprite-partners.png',
            imgPath: '../img/sprite-partners.png',
            retinaSrcFilter: '**/*@2x.png',
            retinaImgName: 'sprite-partners@2x.png',
            retinaImgPath: '../img/sprite-partners@2x.png'
        }));

    return eventStream.merge(
        spriteData.img.pipe(gulp.dest('assets/img')),
        spriteData.css
            .pipe(replace('.icon-', '.sprite-partner-'))
            .pipe(gulp.dest('assets/scss'))
    );
});

gulp.task('img', function () {
    return gulp.src('assets/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('build/sandbox/img/'))
});

gulp.task('font', function () {
    return gulp.src(['assets/font/*.*'])
        .pipe(gulp.dest('build/sandbox/font/'))
});

gulp.task('fonticon', function () {
    return buildFontIcon({name: 'Kawabunga-Icon', scssFile: '_fonticon.scss'}, [
            'assets/svg/common/astro/*.svg',
            'assets/svg/common/meteofrance/*.svg',
            'assets/svg/common/others/*.svg',
            'assets/svg/common/social/facebook/*.svg',
            'assets/svg/common/social/googleplus/*.svg',
            'assets/svg/common/social/instagram/*.svg',
            'assets/svg/common/social/linkedin/*.svg',
            'assets/svg/common/social/pinterest/*.svg',
            'assets/svg/common/social/twitter/*.svg',
            'assets/svg/common/social/youtube/*.svg',
            'assets/svg/common/social/sms/*.svg',
            'assets/svg/brand/funradio/*.svg',
            'assets/svg/brand/girls/*.svg',
            'assets/svg/brand/rtl/*.svg',
            'assets/svg/brand/rtl2/*.svg'
        ]);
});

gulp.task('fonticon-amp', function () {
    return buildFontIcon({name: 'Kawabunga-Amp-Icon', scssFile: '_fonticon-amp.scss', className: 'icon-amp'}, [
        'assets/svg/common/others/search.svg',
        'assets/svg/common/others/user.svg',
        'assets/svg/common/others/quote-end.svg',
        'assets/svg/common/others/quote-start.svg',
        'assets/svg/common/others/play-circle.svg',
        'assets/svg/common/others/play-circle-leaning.svg',
        'assets/svg/common/social/facebook/*.svg',
        'assets/svg/common/social/googleplus/*.svg',
        'assets/svg/common/social/instagram/*.svg',
        'assets/svg/common/social/linkedin/*.svg',
        'assets/svg/common/social/pinterest/*.svg',
        'assets/svg/common/social/twitter/*.svg',
        'assets/svg/common/social/youtube/*.svg',
        'assets/svg/common/social/sms/*.svg',
        'assets/svg/brand/rtl/*.svg'
    ]);
});

var buildFontIcon = function(options, src) {
    return gulp.src(src)
        .pipe(iconfont({
            fontName: options.name,
            normalize: true,
            formats: ['ttf', 'eot', 'woff', 'woff2']
        }))
        .on('glyphs', function (glyphs) {
            gulp.src('assets/svg/_fonticon.scss.template')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: options.name,
                    fontPath: '../font/',
                    className: options.className || 'icon'
                }))
                .pipe(rename(options.scssFile))
                .pipe(gulp.dest('assets/scss/'));
        })
        .pipe(gulp.dest('assets/font/'))
};

/*
 * WatchTask
 */

gulp.task('watch', function () {
    gulp.watch(['sandbox/**/*.html', 'assets/**/*.html'], ['html']);
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

gulp.task('compile', ['img', 'css', 'font', 'sprite', 'js', 'html']);

gulp.task('build', function(cb) {
    runSequence('clean', 'compile', cb);
});

gulp.task('work', ['compile', 'webserver', 'watch']);
