"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cmp_framework_1 = require("./cmp-framework");
var cnil_1 = require("../cnil/cnil");
var euconsent_cookie_1 = require("./euconsent-cookie");
var cmpIframe = require("./cmp-iframe");
window.__cmp = cmp_framework_1.__cmp;
// init euconsent cookie with cnil cookie if euconsent wasn't there
if (cnil_1.cnil.cookie.hasValidCookie() && !euconsent_cookie_1.euconsent.cookie.exists()) {
    cmp_framework_1.onCnilCategoriesChange({ value: cnil_1.cnil.cookie.readValues(), oldValue: null });
}
cnil_1.cnil.cookie.onChange(cmp_framework_1.onCnilCategoriesChange);
cmpIframe.init();
