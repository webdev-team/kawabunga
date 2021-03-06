let gulp = require('gulp');
let sass = require('gulp-sass');
let webserver = require('gulp-webserver');
let autoprefixer = require('gulp-autoprefixer');
let del = require('del');
let iconfont = require('gulp-iconfont');
let consolidate = require("gulp-consolidate");
let rename = require('gulp-rename');
let base64 = require('gulp-base64');
let imagemin = require('gulp-imagemin');
let spritesmith = require('gulp.spritesmith');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let glob = require('glob');
let mergeStream = require('merge-stream');
let watchify = require('watchify');
let _ = require('lodash');
let flatten = require('gulp-flatten');
let ejs = require('gulp-ejs');
let replace = require('gulp-replace');
let tsify = require('tsify');
let log = require('fancy-log');

gulp.task('css', function () {
    return gulp.src('sandbox/scss/*.scss')
        .pipe(sass({includePaths: ['./']}))
        .pipe(base64({
            baseDir: 'assets/scss',
            extensions: ['woff'],
            maxImageSize: 500000,
            debug: false
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/sandbox/css'))
});

gulp.task('html', function () {
    return gulp.src(['sandbox/**/*.html', '!sandbox/**/_*.html'])
        .pipe(ejs({}))
        .on('error', function(err) {
            log(err);
            this.emit('end'); // end this stream
        })
        .pipe(gulp.dest('build/sandbox'));
});

gulp.task('js', function () {
    return bundleAllJsFile({watchify: false});
});

gulp.task('js-watchify', function () {
    return bundleAllJsFile({watchify: true});
});

let bundleAllJsFile = function(options) {
    let files = glob.sync('sandbox/js/*.js');

    let tasks = files.map(function(file) {
        return bundleJsFile(file, options)
    });

    return mergeStream(tasks);
};

let bundleJsFile = function(file, options) {
    let customOpts = {
        entries: [file],
        debug: true,
        extensions: ['.js', '.es6']
    };

    let opts = _.assign({}, watchify.args, customOpts);
    let bundler = browserify(opts);

    if (options.watchify) {
        bundler = watchify(bundler);
    }

    bundler.on('update', bundle);
    bundler.on('log', log);

    bundler = bundler.plugin(tsify);

    function bundle() {
        log('building js file ' + file);

        let task = bundler.bundle()
            .on('error', log)
            .pipe(source(file))
            .pipe(flatten());

        return task.pipe(gulp.dest('build/sandbox/js'));
    }

    return bundle();
};

gulp.task('sprite', function () {
    let spriteData = gulp.src('assets/sprite/partners/*.png')
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

    return mergeStream(
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

gulp.task('svg', function () {
    return gulp.src('assets/svg/**/*.svg')
        .pipe(flatten())
        .pipe(gulp.dest('build/sandbox/svg/'));
});

gulp.task('font', function () {
    return gulp.src(['assets/font/*.*'])
        .pipe(gulp.dest('build/sandbox/font/'))
});

gulp.task('fonticon-standard', function () {
    return buildFontIcon({name: 'Kawabunga-Icon', scssFile: '_fonticon.scss'}, [
            'assets/svg/common/astro/*.svg',
            'assets/svg/common/meteofrance/*.svg',
            'assets/svg/common/orlc/*.svg',
            'assets/svg/common/others/*.svg',
            'assets/svg/common/social/facebook/*.svg',
            'assets/svg/common/social/googleplus/*.svg',
            'assets/svg/common/social/instagram/*.svg',
            'assets/svg/common/social/linkedin/*.svg',
            'assets/svg/common/social/pinterest/*.svg',
            'assets/svg/common/social/twitter/*.svg',
            'assets/svg/common/social/youtube/*.svg',
            'assets/svg/common/social/snapchat/*.svg',
            'assets/svg/common/social/sms/*.svg',
            'assets/svg/common/social/whatsapp/*.svg',
            'assets/svg/brand/funradio/*.svg',
            'assets/svg/brand/girls/*.svg',
            'assets/svg/brand/rtl/*.svg',
            'assets/svg/brand/rtl2/*.svg',
            'assets/svg/brand/orlc/*.svg',
            'assets/svg/brand/ipfrance/*.svg',
            'assets/svg/brand/mediapanel/*.svg',
            'assets/svg/brand/6play/*.svg',
            'assets/svg/brand/passmedia/*.svg'
        ]);
});

gulp.task('fonticon-amp', function () {
    return buildFontIcon({name: 'Kawabunga-Amp-Icon', scssFile: '_fonticon-amp.scss', className: 'icon-amp'}, [
        'assets/svg/common/others/menu-hamburger.svg',
        'assets/svg/common/others/close.svg',
        'assets/svg/common/others/search.svg',
        'assets/svg/common/others/search-v2.svg',
        'assets/svg/common/others/user.svg',
        'assets/svg/common/others/home.svg',
        'assets/svg/common/others/out.svg',
        'assets/svg/common/others/quote-end.svg',
        'assets/svg/common/others/quote-start.svg',
        'assets/svg/common/others/quote-v2.svg',
        'assets/svg/common/others/play.svg',
        'assets/svg/common/others/play-circle.svg',
        'assets/svg/common/others/play-circle-leaning.svg',
        'assets/svg/common/others/clock.svg',
        'assets/svg/common/others/arrow-right-circle.svg',
        'assets/svg/common/others/mini-logo-futur.svg',
        'assets/svg/common/others/mini-logo-girls.svg',
        'assets/svg/common/others/mini-logo-super.svg',
        'assets/svg/common/others/rss.svg',
        'assets/svg/common/others/video.svg',
        'assets/svg/common/others/headphones.svg',
        'assets/svg/common/social/facebook/*.svg',
        'assets/svg/common/social/googleplus/*.svg',
        'assets/svg/common/social/instagram/*.svg',
        'assets/svg/common/social/linkedin/*.svg',
        'assets/svg/common/social/pinterest/*.svg',
        'assets/svg/common/social/twitter/*.svg',
        'assets/svg/common/social/youtube/*.svg',
        'assets/svg/common/social/snapchat/*.svg',
        'assets/svg/common/social/sms/*.svg',
        'assets/svg/common/social/whatsapp/*.svg',
        'assets/svg/brand/rtl/rtl-logo.svg',
        'assets/svg/brand/rtl/rtl-square.svg',
        'assets/svg/brand/rtl2/rtl2-logo.svg',
        'assets/svg/brand/rtl2/rtl2-logo-alt.svg',
        'assets/svg/brand/funradio/funradio-logo.svg',
        'assets/svg/brand/funradio/funradio-square.svg',
        'assets/svg/brand/girls/girls-logo.svg',
        'assets/svg/brand/girls/girls-logo-new.svg',
        'assets/svg/brand/girls/girls-square.svg',
        'assets/svg/brand/orlc/orlc-logo.svg'
    ]);
});

gulp.task('fonticon', gulp.series('fonticon-standard', 'fonticon-amp'));

let buildFontIcon = function(options, src) {
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
    gulp.watch(['sandbox/**/*.html', 'assets/**/*.html'], gulp.series('html'));
    gulp.watch('sandbox/img/**', gulp.series('img'));
    gulp.watch(['sandbox/**/*.scss', 'assets/**/*.scss'], gulp.series('css'));
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
            open: '/build/sandbox/html/index.html'
        }))
});

/*
 * Tests => run 'npm test'
 */

// CUSTOM TASKS :

gulp.task('clean', function () {
    return del(['build']);
});

gulp.task('compile', gulp.series('img', 'svg', 'css', 'font', 'sprite', 'js', 'html'));

gulp.task('build', gulp.series('clean', 'compile'));

gulp.task('work', gulp.series('img', 'svg', 'css', 'font', 'sprite', 'js-watchify', 'html', 'webserver', 'watch'));
gulp.task('default', gulp.series('work'));
