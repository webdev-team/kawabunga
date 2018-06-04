"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("superagent");
var endpoints = require("../env/endpoints");
var cnilLogService;
(function (cnilLogService) {
    function save(log) {
        http.post(endpoints.www()).send(log).end();
    }
    cnilLogService.save = save;
})(cnilLogService = exports.cnilLogService || (exports.cnilLogService = {}));
