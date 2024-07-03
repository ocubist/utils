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
exports.parseQueryParams = void 0;
var zod_1 = require("zod");
var error_alchemy_1 = require("@ocubist/error-alchemy");
var request_1 = require("../../errors/request");
/**
 * Parses and validates query parameters using a provided schema.
 *
 * @template TQueryParams - The type of the query parameters.
 * @param {TQueryParams} [queryParams] - The query parameters to be validated.
 * @param {z.ZodSchema} [queryParamsSchema] - The Zod schema to validate the query parameters.
 * @returns {TQueryParams | undefined} - The validated query parameters or undefined if not provided.
 * @throws {QueryParsingError} - If the validation fails or if the schema is provided without query parameters.
 */
var parseQueryParams = function (queryParams, queryParamsSchema) {
    if (queryParams === undefined && queryParamsSchema !== undefined) {
        throw new request_1.QueryParsingError({
            message: "If a schema is present, the queryParams must be present, too",
        });
    }
    var _queryParams = queryParams;
    if (queryParamsSchema) {
        try {
            _queryParams = (0, error_alchemy_1.parse)(queryParams, queryParamsSchema);
        }
        catch (error) {
            (0, error_alchemy_1.assert)(error, zod_1.z.instanceof(error_alchemy_1.MysticError));
            throw new request_1.QueryParsingError({
                message: "Query parameters parsing failed",
                origin: error,
                payload: __assign({}, error.payload),
            });
        }
    }
    return _queryParams;
};
exports.parseQueryParams = parseQueryParams;
//# sourceMappingURL=parseQueryParams.js.map