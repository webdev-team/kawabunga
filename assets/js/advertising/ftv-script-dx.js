/**
 * Krux is used to customize ad calls.
 * It is optional, to activate, one must call init() on krux module.
 */

var dom = require('../utils/dom');

exports.JS_FTV_CLASS = 'js-ad-dx';

exports.getDxScriptSrc = function () {
    global.oas_tag = global.oas_tag || {};
    var oas_tag = global.oas_tag;

    // oas_tag.site_page = 'abc' => must be set in host page 
    oas_tag.url = 'pub.ftv-publicite.fr';
    oas_tag.version = '1';
    oas_tag.allowSizeOverride = 'true';
    oas_tag.taxonomy = oas_tag.taxonomy ? oas_tag.taxonomy : '';
    oas_tag.query = oas_tag.query ? oas_tag.query + '&' : '';
    oas_tag.sizes = definePositions;

    var protocol = 'https:' === document.location.protocol ? 'https://' : 'http://';
    return protocol + oas_tag.url + '/om/' + oas_tag.version + '.js';
};

var definePositions = function () {
    dom.selectByClass(exports.JS_FTV_CLASS).forEach(function(element) {
        oas_tag.definePos(element.getAttribute('data-position'), [1,1]);
    });
};
