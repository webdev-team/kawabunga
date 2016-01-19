
var _ = require('lodash');
var Promise = require('promise');

var loadingQueues = {};

exports.getScriptsBySrc = function (src) {
    return _.filter(document.getElementsByTagName('script'), function (script) {
        return script.src == src;
    });
};

exports.ensureLoaded = function (src) {
    return new Promise(function (resolve) {
        var scripts = exports.getScriptsBySrc(src);

        if (scripts.length == 0) {
            insertScript(src).then(function () {
                if (loadingQueues[src]) {
                    _.forEach(loadingQueues[src], function (item) {
                        item();
                    });

                    delete loadingQueues[src];
                }

                resolve();
            });
        } else if (_.find(scripts, isLoaded)) {
            resolve();
        } else {
            if (!loadingQueues[src]) {
                loadingQueues[src] = [];
            }

            loadingQueues[src].push(resolve);
        }
    });
};

var isLoaded = function (script) {
    return script.getAttribute('data-loaded') != null;
};

var insertScript = function (url) {
    var script = document.createElement('script');

    script.async = true;
    script.src = url;

    var promise = new Promise(function (resolve) {
        if (script.readyState) {  // IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    script.setAttribute('data-loaded', 'true');

                    resolve();
                }
            };
        } else {  // others
            script.onload = function () {
                script.setAttribute('data-loaded', 'true');

                resolve();
            };
        }
    });

    var firstScript = document.getElementsByTagName('script')[0];

    firstScript.parentNode.insertBefore(script, firstScript);

    return promise;
};