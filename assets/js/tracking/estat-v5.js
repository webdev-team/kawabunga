var forEach = require('lodash/forEach');
var head = require('lodash/head');
var scriptLoader = require('../utils/script-loader');

/**
 * No script version to inject in page
 * <noscript><img src="https://prof.estat.com/m/web/{SERIAL}?c={LEVEL1}&p={LEVEL2}&l3={LEVEL3}&l4={LEVEL4}&st=0&sjs=0" border="0" width="1" height="1"/></noscript>
 */

var SCRIPT = '//prof.estat.com/js/mu-5.1.js';
var SCRIPT_INTEGRATION = '//prof.estat.com/js/mu-integration-5.1.js';

var contentTag = null;

exports.init = function() {
    var tag = head(document.querySelector('[data-role="estat"]'));

    if (tag) {
        scriptLoader.ensureLoaded(SCRIPT).then(function() {
            contentTag = new eStatTag({
                serial: tag.attr('data-serial'),
                measure:"page"
            });

            exports.post({
                level_1: tag.attr('data-level1'),
                level_2: tag.attr('data-level2'),
                level_3: tag.attr('data-level3'),
                level_4: tag.attr('data-level4')
            });
        });
    }
};

exports.post = function(levels) {
    if (contentTag) {
        contentTag.set({levels: levels});
        contentTag.post();
    }
};