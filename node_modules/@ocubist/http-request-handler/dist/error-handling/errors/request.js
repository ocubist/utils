"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryOptionsParsingError = exports.InvalidTimeoutError = exports.UrlValidationError = exports.PathParameterParsingError = exports.RequestBodyParsingError = exports.QueryParsingError = void 0;
var useApiHandlerErrorAlchemy_1 = require("../useApiHandlerErrorAlchemy");
var requestErrorsAlchemy = (0, useApiHandlerErrorAlchemy_1.useApiHandlerErrorAlchemy)("RequestErrors");
/**
 * Error representing an issue parsing query parameters.
 */
exports.QueryParsingError = requestErrorsAlchemy.craftMysticError({
    name: "QueryParsingError",
    cause: "Error parsing query parameters",
    severity: "unexpected",
    errorCode: "VALIDATION_INVALID_FORMAT",
});
/**
 * Error representing an issue parsing the request body.
 */
exports.RequestBodyParsingError = requestErrorsAlchemy.craftMysticError({
    name: "RequestBodyParsingError",
    cause: "Error parsing request body",
    severity: "critical",
    errorCode: "VALIDATION_INVALID_FORMAT",
});
/**
 * Error representing an issue parsing path parameters.
 */
exports.PathParameterParsingError = requestErrorsAlchemy.craftMysticError({
    name: "PathParameterParsingError",
    cause: "Error parsing path parameters",
    severity: "critical",
    errorCode: "VALIDATION_INVALID_FORMAT",
});
/**
 * Error representing an invalid URL.
 */
exports.UrlValidationError = requestErrorsAlchemy.craftMysticError({
    name: "UrlValidationError",
    cause: "The provided URL is invalid",
    severity: "critical",
    errorCode: "VALIDATION_INVALID_FORMAT",
});
/**
 * Error representing an invalid timeout value.
 */
exports.InvalidTimeoutError = requestErrorsAlchemy.craftMysticError({
    name: "InvalidTimeoutError",
    cause: "Invalid timeout provided",
    severity: "critical",
    errorCode: "CONFIG_INVALID",
});
/**
 * Error representing invalid retry options.
 */
exports.RetryOptionsParsingError = requestErrorsAlchemy.craftMysticError({
    name: "RetryOptionsParsingError",
    cause: "The provided RetryOptions are invalid",
    severity: "critical",
    errorCode: "CONFIG_INVALID",
});
//# sourceMappingURL=request.js.map