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
exports.parseResponseBody = void 0;
var zod_1 = require("zod");
var error_alchemy_1 = require("@ocubist/error-alchemy");
var response_1 = require("../../errors/response");
/**
 * Parses and validates the response body using a provided schema.
 *
 * @template TResponseBody - The type of the response body.
 * @param {TResponseBody} responseBody - The response body to be validated.
 * @param {z.ZodSchema<TResponseBody>} [responseBodySchema] - The Zod schema to validate the response body.
 * @returns {TResponseBody} - The validated response body.
 * @throws {ResponseParsingError} - If the validation fails.
 */
var parseResponseBody = function (responseBody, responseBodySchema) {
    var _responseBody = responseBody;
    if (responseBodySchema !== undefined) {
        try {
            _responseBody = (0, error_alchemy_1.parse)(responseBody, responseBodySchema);
        }
        catch (error) {
            (0, error_alchemy_1.assert)(error, zod_1.z.instanceof(error_alchemy_1.MysticError));
            throw new response_1.ResponseParsingError({
                message: "Response body parsing failed",
                origin: error,
                payload: __assign(__assign({}, error.payload), { responseBody: responseBody }),
            });
        }
    }
    return _responseBody;
};
exports.parseResponseBody = parseResponseBody;
//# sourceMappingURL=parseResponseBody.js.map