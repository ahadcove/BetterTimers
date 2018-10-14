"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var KEYS;
(function (KEYS) {
    KEYS["TIMEOUT"] = "timeout";
    KEYS["INTERVAL"] = "interval";
})(KEYS || (KEYS = {}));
exports.KEYS = KEYS;
;
var BetterTimer = /** @class */ (function () {
    function BetterTimer(type) {
        var _this = this;
        this.getType = function () {
            return _this.type;
        };
        this.isActive = function () {
            return _this.active;
        };
        this.type = type;
        this.active = true;
        this.cleared = false;
    }
    return BetterTimer;
}());
var Timeout = /** @class */ (function (_super) {
    tslib_1.__extends(Timeout, _super);
    function Timeout(fn, timeout) {
        var _this = _super.call(this, KEYS.TIMEOUT) || this;
        _this.clear = function () {
            clearTimeout(_this.timer);
            _this.cleared = true;
            _this.active = false;
        };
        if (typeof timeout === 'string')
            timeout = parseFloat(timeout);
        _this.timer = setTimeout(fn, timeout);
        return _this;
    }
    return Timeout;
}(BetterTimer));
exports.Timeout = Timeout;
var Interval = /** @class */ (function (_super) {
    tslib_1.__extends(Interval, _super);
    function Interval(fn, interval) {
        var _this = _super.call(this, KEYS.INTERVAL) || this;
        _this.clear = function () {
            clearInterval(_this.timer);
            _this.cleared = true;
            _this.active = false;
        };
        if (typeof interval === 'string')
            interval = parseFloat(interval);
        _this.timer = setInterval(fn, interval);
        return _this;
    }
    return Interval;
}(BetterTimer));
exports.Interval = Interval;
var Clear = function (timer) {
    if (timer && timer.timer) {
        timer.clear();
        return timer.isActive();
    }
    else {
        return undefined;
    }
};
exports.Clear = Clear;
//# sourceMappingURL=index.js.map