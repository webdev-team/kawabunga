var ftvScript = require('./ftv-script-dx');
var scriptLoader = require('../utils/script-loader');
var _ = require('lodash');

exports.registry = {};

exports.init = function () {
    scriptLoader.ensureLoaded(ftvScript.getDxScriptSrc()).then(function () {
        exports.setupAds();
    });
};

exports.setupAds = function () {
    _(document.getElementsByClassName(ftvScript.JS_FTV_CLASS)).forEach(function (element) {
        exports.setupAd(element)
    });
};

exports.setupAd = function (element) {
    var ad = exports.createAd(element);
    exports.registry[ad.position] = ad;
    return ad;
};

exports.createAd = function (element) {
    return new Ad(element);
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
    if (oas_tag && oas_tag.loadAd && oas_tag.reloadAds) {
        if (!this.loaded) {
            this.element.id = this.id;
            oas_tag.loadAd(this.position);
            if (this.refresh > 0) {
                var that = this;
                window.setInterval(function () {
                    that.load();
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
