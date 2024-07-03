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
exports.parseRetryOptions = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var RetryOptions_1 = require("../../../types/RetryOptions");
var zod_1 = require("zod");
var request_1 = require("../../errors/request");
/**
 * Parses and validates the retry options, merging them with default values.
 *
 * @param {OptionalRetryOptions} [retryOptions] - The retry options to be validated.
 * @returns {RetryOptions} - The validated and merged retry options.
 * @throws {RetryOptionsParsingError} - If the validation fails.
 */
var parseRetryOptions = function (retryOptions) {
    var _retryOptions = retryOptions;
    if (retryOptions !== undefined) {
        try {
            _retryOptions = (0, error_alchemy_1.parse)(retryOptions, RetryOptions_1.OptionalRetryOptions);
        }
        catch (error) {
            (0, error_alchemy_1.assert)(error, zod_1.z.instanceof(error_alchemy_1.MysticError));
            throw new request_1.RetryOptionsParsingError({
                message: "Parsing of the RetryOptions failed.",
            });
        }
    }
    var mergedWithDefault = __assign(__assign({}, RetryOptions_1.defaultRetryOptions), (_retryOptions !== null && _retryOptions !== void 0 ? _retryOptions : {}));
    return mergedWithDefault;
};
exports.parseRetryOptions = parseRetryOptions;
//# sourceMappingURL=parseRetryOptions.js.map