import * as env from "../env/env";

export const COOKIE = {
    NAME: 'passmedia_reject_autologin',
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
        return 'https://compte.rtl.fr/passmedia/api/' + path;
    } else {
        return 'https://compte.lab.rtl.fr/passmedia/api/' + path;
    }
};

export const API = {
    GIGYA_KEY: getKey(),
    AUTOLOGIN: api('autologin'),
    LOGIN: api('login'),
};
