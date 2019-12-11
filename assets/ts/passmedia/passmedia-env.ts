import * as env from "../env/env";

export const COOKIE = {
    NAME: 'pm_autolog_reject',
    DURATION: {expires: 365},
    PATH_AND_DOMAIN: {path: '/', domain: env.getCookieDomain()}
};

const getKey = () => {
    if (env.isProd()) {
        return '3_60SXoNbTGCWPNC88AYot1x5s9teB6yw-u3RobuN3qli0bobrJSy7dbiZRaWU51L5';
    } else {
        return '3_TSaCp1yTOdQ0e56_96DV8zptdNiZLAhjFuSVBO7ajhmXtwo8HAkG2mklLPxzKmhE';
    }
};

const api = function (path: string): string {
    if (env.isProd()) {
        return 'https://compte.rtl.fr' + path;
    } else {
        return 'https://compte.lab.rtl.fr' + path;
    }
};

export const API = {
    GIGYA_KEY: getKey(),
    AUTOLOGIN: api('/passmedia/autologin'),
    LOGIN: api('/passmedia/login'),
};
