"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderLoginPopup = function () { return "\n    <div class=\"row\">\n        <div class=\"col d-md-none\">\n            <div class=\"title\">PASSMEDIA</div>\n        </div>\n        <div class=\"col-12\">\n            <p class=\"mb-3\">F\u00E9licitations, vous b\u00E9n\u00E9ficiez d\u00E8s \u00E0 pr\u00E9sent d'un acc\u00E8s connect\u00E9 \u00E0 l'ensemble de RTL</p>\n        </div>\n        <div class=\"col-12\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-12 col-md mb-sm-3 mb-md-0\">\n                    <a href=\"#\" class=\"link\">Consulter les CGU RTL</a>\n                </div>\n                <div class=\"col-12 col-md-auto\">\n                    <a class=\"btn btn-action btn-link\" data-role=\"pm-popup-close\">Ne pas me connecter</a>\n                    <a class=\"btn btn-action btn-primary\" data-role=\"pm-popup-ok\">Ok</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12\">\n            <div class=\"progress\">\n                <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n        </div>\n    </div>"; };
exports.renderVerifyEmailPopup = function (data) { return "\n    <div class=\"row\">\n        <div class=\"col text-right\">\n            <span class=\"close\" data-role=\"pm-popup-close\"><i class=\"icon icon-close-sign icon-ff\"></i></span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"title\">PASSMEDIA</div>\n            <div class=\"subtitle\">Session PassMedia d\u00E9tect\u00E9e</div>\n            <p class=\"mb-3\">Vous disposez d\u00E9j\u00E0 d'un compte RTL avec l'adresse email " + data.email + "</p>\n            <p class=\"mb-3\">Pour associer votre compte PassMedia avec votre compte RTL, veuillez v\u00E9rifier votre adresse email</p>\n            <a class=\"btn btn-action btn-primary d-block mb-3\" data-role=\"pm-popup-ok\">Recevoir un email de v\u00E9rification</a>\n        </div>\n    </div>"; };
exports.renderFeedbackPopup = function (data) { return "\n    <div class=\"row\">\n        <div class=\"col text-right\">\n            <span class=\"close\" data-role=\"pm-popup-close\"><i class=\"icon icon-close-sign icon-ff\"></i></span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"title\">PASSMEDIA</div>\n            <div class=\"subtitle\">Un email vous a \u00E9t\u00E9 envoy\u00E9 \u00E0 l'adresse suivante</div>\n            <p class=\"mb-3\">" + data.email + "</p>\n        </div>\n    </div>\n"; };
var popupInvoker = {
    login: exports.renderLoginPopup,
    verifyEmail: exports.renderVerifyEmailPopup,
    feedback: exports.renderFeedbackPopup
};
exports.renderer = {
    draw: function (name, args) {
        if (name in popupInvoker) {
            return popupInvoker[name].apply(popupInvoker, [].slice.call(arguments, 1));
        }
        return false;
    }
};
