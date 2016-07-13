/*
 ---
 name: estat page tracking
 ...
 */

var estatScript = require('./estat-script');

exports.loaded = false;
exports.serial = null;
exports.levels = null;

exports.init = function () {
    var marker = global.document.getElementById('estat-marker');

    if (!marker) {
        return;
    }

    exports.serial = marker.getAttribute('data-serial');
    exports.levels = JSON.parse(marker.getAttribute('data-levels'));

    if (exports.loaded) {
        exports.post();
    } else {
        estatScript.insertScriptWithSerial(exports.serial, function () {
            exports.loaded = true;

            exports.post();
        }, null);
    }
};

exports.getLevels = function (lastLevelHash) {
    var result = exports.levels.slice(0);

    if (lastLevelHash) {
        result[result.length - 1] = result[result.length - 1] + '#' + lastLevelHash;
    }

    return result;
};

exports.post = function (lastLevelHash) {
    global.eStat_id.serial(exports.serial);

    exports.getLevels(lastLevelHash).forEach(function (item, index) {
        global.eStat_id.niveau(index + 1, item);
    });

    global.eStat_tag.post("ml");
};
