"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
exports.COOKIE = {
    NAME: 'pm_autolog_reject',
    DURATION: { expires: 365 },
    PATH_AND_DOMAIN: { path: '/', domain: env.getCookieDomain() }
};
var getKey = function () {
    if (env.isProd()) {
        return '3_60SXoNbTGCWPNC88AYot1x5s9teB6yw-u3RobuN3qli0bobrJSy7dbiZRaWU51L5';
    }
    else {
        return '3_TSaCp1yTOdQ0e56_96DV8zptdNiZLAhjFuSVBO7ajhmXtwo8HAkG2mklLPxzKmhE';
    }
};
var api = function (path) {
    if (env.isProd()) {
        return 'https://compte.rtl.fr' + path;
    }
    else {
        return 'https://compte.lab.rtl.fr' + path;
    }
};
exports.API = {
    GIGYA_KEY: getKey(),
    AUTOLOGIN: api('/passmedia/autologin'),
    LOGIN: api('/passmedia/login'),
};
