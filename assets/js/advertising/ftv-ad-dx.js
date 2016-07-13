
var ftvScript = require('./ftv-script-dx');
var scriptLoader = require('../utils/script-loader');
var dom = require('../utils/dom');

exports.REFRESH_ON_HOLD = false;

exports.registry = {};

exports.init = function () {
    scriptLoader.ensureLoaded(ftvScript.getDxScriptSrc()).then(function () {
        exports.setupAds();
    });
};

exports.setupAds = function () {
    dom.selectByClass(ftvScript.JS_FTV_CLASS).forEach(exports.setupAd);
};

exports.setupAd = function (element) {
    var ad = exports.createAd(element);
    exports.registry[ad.position] = ad;
    return ad;
};

exports.createAd = function (element) {
    return new Ad(element);
};

exports.holdRefresh = function (hold) {
    exports.REFRESH_ON_HOLD = hold;
};

var Ad = function (element) {
    this.element = element;
    this.position = element.getAttribute('data-position');
    this.refresh = parseInt(this.element.getAttribute('data-refresh'), 10) || 0;
    this.refresh *= 1000;
    this.autoload = (element.getAttribute('data-autoload') !== 'false');
    this.id = 'oas_' + this.position;

    this.loaded = false;
    if (this.autoload) {
        this.load();
    }
};

Ad.prototype.load = function () {
    if (global.oas_tag && global.oas_tag.loadAd && global.oas_tag.reloadAds) {
        if (!this.loaded) {
            this.element.id = this.id;
            oas_tag.loadAd(this.position);
            if (this.refresh > 0) {
                var that = this;
                window.setInterval(function () {
                    if (!exports.REFRESH_ON_HOLD) {
                        that.load();
                    }
                }, this.refresh);
            }
            this.loaded = true;
        } else {
            oas_tag.reloadAds([this.position]);
        }
    }
    return this;
};

Ad.prototype.resetElement = function (element) {
    this.element = element;
    if (this.loaded && this.id) {
        this.element.id = this.id;
    }
    return this;
};
