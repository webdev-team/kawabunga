
var jsdom = require('jsdom');
var fs = require('fs');

var initHTML = function(html, options) {
    global.document = jsdom.jsdom(html, options);
    global.window = global.document.defaultView;
    global.navigator = global.window.navigator;
    global.history = global.window.history;
    global.console = global.window.console;
    global.XMLHttpRequest = global.window.XMLHttpRequest;
};

var setupSinon = function() {
    var sinon = require('sinon');

    if (exports.server) {
        exports.server.restore();
    }

    exports.server = sinon.fakeServer.create();
    exports.server.respondImmediately = true;
};

exports.initWithHtml = function(html, options) {
    initHTML(html, options);

    // require sinon after fake window is setup
    setupSinon();
};

exports.initWithEmptyHtml = function(options) {
    exports.initWithHtml('', options);
};

exports.initWithFile = function(file, options) {
    exports.initWithHtml(fs.readFileSync(file, "utf8"), options);
};

// boot env with empty dom
exports.initWithEmptyHtml();
