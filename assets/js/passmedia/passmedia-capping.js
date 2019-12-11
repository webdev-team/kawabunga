"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var PHASE_LIMIT = 5;
var MAX_HITS_ON_PHASE_ONE = 3;
var elapsedTime = function (t1, t2, unit) { return Math.abs(moment(t1).diff(t2, unit)); };
var elapsedDays = function (t1, t2) { return elapsedTime(t1, t2, 'days'); };
var PassMediaCapping = /** @class */ (function () {
    function PassMediaCapping(val) {
        if (val === void 0) { val = null; }
        this._cookieExists = false;
        if (val === null) {
            this._capping = { hits: [] };
        }
        else {
            this._cookieExists = true;
            this._capping = val;
        }
        this._phase = this.computePhase();
    }
    Object.defineProperty(PassMediaCapping.prototype, "value", {
        set: function (capping) {
            this._capping = capping;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassMediaCapping.prototype, "hits", {
        set: function (hits) {
            this._capping.hits = hits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassMediaCapping.prototype, "firstHit", {
        get: function () {
            return this._capping.hits[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassMediaCapping.prototype, "lastHit", {
        get: function () {
            return this._capping.hits[this._capping.hits.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    PassMediaCapping.prototype.getPhase = function () {
        return this._phase;
    };
    PassMediaCapping.prototype.getJSON = function () {
        return this._capping;
    };
    PassMediaCapping.prototype.create = function (date) {
        return {
            hits: [date]
        };
    };
    ;
    PassMediaCapping.prototype.hit = function (date) {
        if (date === void 0) { date = null; }
        date = date ? date : moment().valueOf();
        if (this.canHit(date)) {
            this._capping.hits.push(date);
            this._phase = this.computePhase();
        }
    };
    PassMediaCapping.prototype.computePhase = function () {
        var refHit = this.firstHit;
        var phase = 1;
        this._capping.hits.forEach(function (hit) {
            if (elapsedDays(refHit, hit) >= 30) {
                refHit = hit;
                phase++;
            }
        });
        return phase;
    };
    PassMediaCapping.prototype.canHit = function (date) {
        if (date === void 0) { date = null; }
        if (this._cookieExists) {
            date = date ? date : moment().valueOf();
            return (this._phase === 1) ? this.isQuantityRespected() && this.isFrequencyRespected(date) : this._phase <= PHASE_LIMIT;
        }
        else {
            return true;
        }
    };
    PassMediaCapping.prototype.isQuantityRespected = function () {
        return (this._phase === 1) ? this._capping.hits.length < MAX_HITS_ON_PHASE_ONE : true;
    };
    PassMediaCapping.prototype.isFrequencyRespected = function (date) {
        var moreThanOneDayElapsed = elapsedDays(date, this.lastHit) >= 1;
        var moreThanThirtyDaysElapsed = elapsedDays(date, this.lastHit) >= 30;
        return (this._phase === 1) ? moreThanOneDayElapsed : moreThanThirtyDaysElapsed;
    };
    return PassMediaCapping;
}());
exports.PassMediaCapping = PassMediaCapping;
exports.default = PassMediaCapping;
