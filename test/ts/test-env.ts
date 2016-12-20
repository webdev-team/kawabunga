/// <reference path="../../typings/modules/jsdom/index.d.ts" />
/// <reference path="./test-env.d.ts" />

import * as jsdom from 'jsdom';

let initHtml = function (html: string, options?):void {
    global.document = jsdom.jsdom(html, options);
    global.window = global.document.defaultView;
    global.navigator = global.window.navigator;

    /*
    global.Element = global.window.Element;
    global.history = global.window.history;
    global.XMLHttpRequest = global.window.XMLHttpRequest;
    */
};

export function initWithHtml(html: string, options?):void {
    initHtml(html, options);
};