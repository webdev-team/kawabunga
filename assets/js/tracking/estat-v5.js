
var Promise = require('promise');
var scriptLoader = require('../utils/script-loader');
var dom = require('../utils/dom')

/**
 * Doc available on https://portail-marqueurs.mediametrie.fr
 *
 * No script version to inject in page
 * <noscript><img src="https://prof.estat.com/m/web/{SERIAL}?c={LEVEL1}&p={LEVEL2}&l3={LEVEL3}&l4={LEVEL4}&st=0&sjs=0" border="0" width="1" height="1"/></noscript>
 */

var SCRIPT = 'https://prof.estat.com/js/mu-5.2.1.js';
var SCRIPT_INTEGRATION = 'https://prof.estat.com/js/mu-integration-5.2.1.js';

exports.ensureLoaded = function () {
    return new Promise(function (resolve) {
        scriptLoader.ensureLoaded(SCRIPT).then(function () {
            resolve(exports)
        })
    })
};

exports.readPageConfig = function () {
    var $estat = dom('[data-role="estat"]');

    if ($estat.isEmpty()) {
        return {error: 'no tag found in page'};
    }
    
    var config = {
        serial: $estat.data('serial'),
        measure: 'page',
        levels: {
            level_1: $estat.data('level1'),
            level_2: $estat.data('level2'),
            level_3: $estat.data('level3'),
            level_4: $estat.data('level4')
        }
    }

    if ($estat.data('crmID')) {
        config.crmID = $estat.data('crmID');
    }

    return config;
};

/**
 * estat should be loaded before calling this function
 */
exports.createEstatTag = function (config) {
    return new global.eStatTag(config);
};