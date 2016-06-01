/**
 * Krux is used to customize ad calls.
 * It is optional, to activate, one must call init() on krux module.
 */
var ftvKrux = require('./ftv-krux');

var forEach = require('lodash/forEach');

exports.JS_FTV_CLASS = 'js-ftv-ad-dx';

exports.getDxScriptSrc = function () {
    global.oas_tag = global.oas_tag || {};
    var oas_tag = global.oas_tag;

    var oasKeyValues = getOasKeyValues();

    // oas_tag.site_page = 'abc' => must be set in host page 
    oas_tag.url = 'pub.ftv-publicite.fr';
    oas_tag.version = '1';
    oas_tag.allowSizeOverride = 'true';
    oas_tag.taxonomy = (oas_tag.taxonomy ? oas_tag.taxonomy : '') + oasKeyValues;
    oas_tag.query = (oas_tag.query ? oas_tag.query : '?') + oasKeyValues;
    oas_tag.sizes = definePositions;

    var protocol = 'https:' === document.location.protocol ? 'https://' : 'http://';
    return protocol + oas_tag.url + '/om/' + oas_tag.version + '.js';
};

var getOasKeyValues = function() {
    var user = ftvKrux.retrieve('user');
    var segs = ftvKrux.retrieve('segs');

    var oasParams = [];
    if (user) {
        oasParams.push('kuid=' + user);
    }
    if (segs) {
        oasParams.push('ksg=' + segs.split(','));
    }
    return oasParams.length ? oasParams.join(';') + ';' : '';
};

var definePositions = function () {
    forEach(document.getElementsByClassName(exports.JS_FTV_CLASS), function (element) {
        oas_tag.definePos(element.getAttribute('data-position'), [1,1]);
    });
};