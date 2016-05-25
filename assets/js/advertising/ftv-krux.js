var scriptLoader = require('../utils/script-loader');

exports.init = function () {
    exports.loadScriptTag();
};

exports.loadScriptTag = function () {
    var match = location.href.match(/\bkxsrc=([^&]+)/);
    var src = match && decodeURIComponent(match[1]);
    
    src = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" : (location.protocol==="https:"?"https:":"http:") + "//cdn.krxd.net/controltag?confid=KPVoYvuh";
    
    return scriptLoader.ensureLoaded(src);
};

exports.retrieve = function (key) {
    if (!key) {
        return "";
    }
    
    key = 'kx'+key;
    
    if(window.localStorage) {
        return window.localStorage[key] || "";
    } else if (navigator.cookieEnabled) {
        var match = document.cookie.match(key+'=([^;]*)');
        return (match && unescape(match[1])) || "";
    } else {
        return "";
    }
};
