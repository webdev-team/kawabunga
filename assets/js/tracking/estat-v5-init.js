/*
 ---
 name: estat page tracking
 ...
 */

var estat = require('./estat-v5');
var pageTag = null;

exports.init = function() {
    estat.ensureLoaded().then(function() {
        exports.post();
    });
};

exports.post = function() {
    post(estat.readPageConfig());
};

var post = function(config) {
    if (!pageTag) {
        pageTag = estat.createEstatTag(estat.readPageConfig())
    }

    pageTag.set(config);

    pageTag.post();
};
