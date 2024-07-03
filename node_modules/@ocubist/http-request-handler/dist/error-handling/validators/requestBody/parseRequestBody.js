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
exports.parseRequestBody = void 0;
var zod_1 = require("zod");
var request_1 = require("../../errors/request");
var error_alchemy_1 = require("@ocubist/error-alchemy");
/**
 * Parses and validates the request body using a provided schema.
 *
 * @template TRequestBody - The type of the request body.
 * @param {TRequestBody} [requestBody] - The request body to be validated.
 * @param {z.ZodSchema<TRequestBody>} [requestBodySchema] - The Zod schema to validate the request body.
 * @returns {TRequestBody | undefined} - The validated request body or undefined if not provided.
 * @throws {RequestBodyParsingError} - If the validation fails or if the schema is provided without a request body.
 */
var parseRequestBody = function (requestBody, requestBodySchema) {
    if (requestBody === undefined && requestBodySchema !== undefined) {
        throw new request_1.RequestBodyParsingError({
            message: "If a schema is present, the requestBody must be present, too",
        });
    }
    var _requestBody = requestBody;
    if (requestBodySchema) {
        try {
            _requestBody = (0, error_alchemy_1.parse)(requestBody, requestBodySchema);
        }
        catch (error) {
            (0, error_alchemy_1.assert)(error, zod_1.z.instanceof(error_alchemy_1.MysticError));
            throw new request_1.RequestBodyParsingError({
                message: "Request body parsing failed",
                origin: error,
                payload: __assign({}, error.payload),
            });
        }
    }
    return _requestBody;
};
exports.parseRequestBody = parseRequestBody;
//# sourceMappingURL=parseRequestBody.js.map