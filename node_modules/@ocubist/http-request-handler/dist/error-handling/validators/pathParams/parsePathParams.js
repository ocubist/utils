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
exports.parsePathParams = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var zod_1 = require("zod");
var request_1 = require("../../errors/request");
/**
 * Parses and validates path parameters using a provided schema.
 *
 * @template TPathParams - The type of the path parameters.
 * @param {TPathParams} [pathParams] - The path parameters to be validated.
 * @param {z.ZodSchema} [pathParamsSchema] - The Zod schema to validate the path parameters.
 * @returns {TPathParams | undefined} - The validated path parameters or undefined if not provided.
 * @throws {PathParameterParsingError} - If the validation fails or if the schema is provided without path parameters.
 */
var parsePathParams = function (pathParams, pathParamsSchema) {
    if (pathParams === undefined && pathParamsSchema !== undefined) {
        throw new request_1.PathParameterParsingError({
            message: "If a schema is present, the pathParams must be present, too",
        });
    }
    var _pathParams = pathParams;
    if (pathParamsSchema) {
        try {
            _pathParams = (0, error_alchemy_1.parse)(pathParams, pathParamsSchema);
        }
        catch (error) {
            (0, error_alchemy_1.assert)(error, zod_1.z.instanceof(error_alchemy_1.MysticError));
            throw new request_1.PathParameterParsingError({
                message: "Custom path parameters validation failed",
                origin: error,
                payload: __assign(__assign({}, error.payload), { pathParams: pathParams }),
            });
        }
    }
    return _pathParams;
};
exports.parsePathParams = parsePathParams;
//# sourceMappingURL=parsePathParams.js.map