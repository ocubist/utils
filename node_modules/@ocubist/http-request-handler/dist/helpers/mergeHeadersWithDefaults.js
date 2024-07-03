"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeHeadersWithDefaults = void 0;
var Headers_1 = require("../types/Headers");
/**
 * Merges the provided headers with the default headers.
 *
 * @param {Headers} headers - The headers to merge with the default headers.
 * @returns {Headers} - The merged headers.
 */
var mergeHeadersWithDefaults = function (headers) {
    return __assign(__assign({}, Headers_1.defaultHeaders), headers);
};
exports.mergeHeadersWithDefaults = mergeHeadersWithDefaults;
//# sourceMappingURL=mergeHeadersWithDefaults.js.map