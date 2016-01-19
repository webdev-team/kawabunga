var _ = require('lodash');

var scriptLoader = require('../utils/script-loader');

var random = String(Math.random()).substring(2, 11);

exports.ensureLoaded = function () {
    return scriptLoader.ensureLoaded(exports.getScriptSrc());
};

exports.getRandomToken = function () {
    return random;
};

exports.getScriptSrc = function () {
    var url = global.OAS_url || 'http://pub.ftv-publicite.fr';
    var listpos = exports.getPositions(); // ex: 'Top,Middle,Middle2,Middle3,x01,x02,x03';
    var query = global.OAS_query || '?';
    var sitepage = global.OAS_sitepage; // ex: 'www.ftv-publicite.fr/accueil';

    return url + '/4/' + sitepage + '/1' + random + '@' + listpos + query;
};

exports.getPositions = function () {
    return global.OAS_listpos || collectPosition();
};

var collectPosition = function () {
    return _.collect(document.getElementsByClassName('js-ftv-ad'), function (element) {
        return element.getAttribute('data-position');
    }).join(',');
};