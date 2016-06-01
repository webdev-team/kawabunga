
require('js-polyfills/dom');

var forEach = require('lodash/forEach');
var find = require('lodash/find');

var ftvScript = require('./ftv-script');
var utils = require('../utils/utils');

// used in inserted iframe body
window.top.FtvConfig = {
    OAS_AD: function (position) {
        //rewrite the doucment.write for iframe document ... dirty but effective.
        var oldWrite = document.write;
        document.write = function (element) {
            var doc = frames['frame_' + position].document || frames['frame_' + position].contentWindow.document;
            doc.write(element);
        };
        OAS_RICH(position);
        document.write = oldWrite;
    }
};

exports.REFRESH_INTERVAL_DEFAULT = 90000;
exports.REFRESH_INTERVAL = exports.REFRESH_INTERVAL_DEFAULT;
exports.REFRESH_ON_HOLD = false;

exports.registry = {};

exports.init = function () {
    ftvScript.ensureLoaded().then(function () {
        exports.setupAds();
    });
};

exports.setupAds = function () {
    forEach(document.getElementsByClassName('js-ftv-ad'), function (element) {
        if (utils.isVisible(element)) {
            exports.setupAd(element);
        }
    });
};

exports.setupAd = function (element) {
    var ad = exports.createAd(element);

    exports.registry[ad.id] = ad;

    ad.injectIframe();

    return ad;
};

exports.getById = function (id) {
    return exports.registry[id];
};

exports.getByElement = function (element) {
    return exports.getById(element.id);
};

exports.createAd = function (element) {
    return new Ad(element);
};

exports.holdRefresh = function (hold) {
    exports.REFRESH_ON_HOLD = hold;
};

var Ad = function (element) {
    this.element = element;
    this.id = element.id;
    this.position = element.getAttribute('data-position');
    this.width = element.getAttribute('data-width');
    this.height = element.getAttribute('data-height');
    this.refresh = element.getAttribute('data-refresh');
    this.loaded = false;
    this.iframe = null;
    this.timerId = null;
};

Ad.prototype.refreshIframe = function () {
    this.removeIframe();

    this.injectIframe();
};

Ad.prototype.destroy = function () {
    this.removeIframe();

    this.element.parentNode.removeChild(this.element);

    delete exports.registry[this.id];
};

Ad.prototype.removeIframe = function () {
    this.element.innerHTML = '';

    if (this.timerId) {
        clearInterval(this.timerId);

        this.timerId = null;
    }
};

Ad.prototype.injectIframe = function () {
    if (this.iframe) {
        this.removeIframe();
    }

    this.iframe = document.createElement('iframe');

    this.iframe.id = 'frame_' + this.position;
    this.iframe.border = '0px';
    this.iframe.hspace = '0';
    this.iframe.vspace = '0';
    this.iframe.marginWidth = '0';
    this.iframe.marginHeight = '0';
    this.iframe.style.border = '0';
    this.iframe.scrolling = 'no';
    this.iframe.frameBorder = '0';
    this.iframe.style.display = 'none';
    this.iframe.style.width = this.width + 'px';
    this.iframe.style.height = this.height + 'px';
    this.iframe.height = this.height;
    this.iframe.width = this.width;

    this.element.insertBefore(this.iframe, this.element.firstChild);

    this.writeIframeContent();
    this.iframe.style.display = 'block';

    this.fixSumoHeight();

    if (this.refresh) {
        var _this = this;

        this.timerId = setInterval(function () {
            if (!exports.REFRESH_ON_HOLD) {
                _this.refreshIframe();
            }
        }, exports.REFRESH_INTERVAL);
    }
};

Ad.prototype.writeIframeContent = function () {
    // default all undefined targets to _top
    // include IAB friendly Iframe support "inDapIF"
    var content = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><scr'
        + 'ipt>inDapIF=true;</scr' + 'ipt></head>';
    content += '<body>';
    content += '<scr' + 'ipt>';
    content += 'var staticRoot = "' + global.staticRoot + '";';
    content += 'window.top.FtvConfig.OAS_AD("' + this.position + '");</scri' + 'pt>';
    content += '</body></html>';

    var document = getFrameDocument(this.iframe);
    document.open('text/html', 'replace');
    document.write(content);
    document.close();
};

Ad.prototype.fixSumoHeight = function () {
    var sumoElligiblePositions = ['Middle', 'Middle2', 'Middle3', 'Bottom1', 'Bottom2'];

    var position = find(sumoElligiblePositions);
    var iframe = this.iframe;

    if (position) {
        this.iframe.addEventListener('load', function () {
            // try/catch is useful here to avoid an error on IE8 when displaying an iframe and deleting it immediately
            try {
                var height = iframe.contentWindow.document.body.scrollHeight;

                if (height && height > 550) { // avoid 250 because some heights ads are not perfect (251px, 281px, etc)
                    iframe.style.height = '600px'; // set height size on iframe parent (can not rely on exact content height for a sumo)
                    iframe.height = '600';
                }
            } catch (e) {
            }
        });
    }
};

var getFrameDocument = function (frame) {
    if (frame.contentWindow) {
        return frame.contentWindow.document;
    } else if (frame.contentDocument.document) {
        return frame.contentDocument.document;
    } else {
        return frame.contentDocument;
    }
};