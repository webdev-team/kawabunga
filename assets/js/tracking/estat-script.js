
exports.insertScriptWithSerial = function(serial, apiCallback, playerCallback) {
    global._PJS = 0; // needed by default for eStat pages and stream (will be 1 after eStat is ready)
    global._cmsJS = 0; // enable stream marker (will be 1 after eStat is ready)
    global._eStatDS = 1; // enable manual stream marker

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://prof.estat.com/js/' + serial + '.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);

    // eStat API load callback
    global.eStat_PJS = function () {
        if (apiCallback) {
            apiCallback();
        }
    };

    // eStat Players API load callback
    global.eStat_CMSJS = function () {
        if (playerCallback) {
            playerCallback();
        }
    };
};