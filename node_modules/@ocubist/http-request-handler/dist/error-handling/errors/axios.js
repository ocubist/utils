"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutError = exports.UnexpectedAxiosError = exports.NetworkError = exports.HttpResponseError = void 0;
var useApiHandlerErrorAlchemy_1 = require("../useApiHandlerErrorAlchemy");
var axiosErrorsAlchemy = (0, useApiHandlerErrorAlchemy_1.useApiHandlerErrorAlchemy)("AxiosErrors");
/**
 * Error representing an HTTP response error with a status code from the server.
 */
exports.HttpResponseError = axiosErrorsAlchemy.craftMysticError({
    name: "HttpResponseError",
    cause: "Server responded with an error status code",
    severity: "critical",
    errorCode: "HTTP_INTERNAL_SERVER_ERROR",
});
/**
 * Error representing a network connectivity issue.
 */
exports.NetworkError = axiosErrorsAlchemy.craftMysticError({
    name: "NetworkError",
    cause: "Network connectivity issue",
    severity: "critical",
    errorCode: "NETWORK_CONNECTION_REFUSED",
});
/**
 * Error representing an unexpected Axios error.
 */
exports.UnexpectedAxiosError = axiosErrorsAlchemy.craftMysticError({
    name: "UnexpectedAxiosError",
    cause: "The cause is unknown and might need attention",
    severity: "unexpected",
    errorCode: "UNKNOWN_ERROR",
});
/**
 * Error representing a timeout error when the server takes too long to respond.
 */
exports.TimeoutError = axiosErrorsAlchemy.craftMysticError({
    name: "TimeoutError",
    cause: "The server took too long to send a response",
    severity: "critical",
    errorCode: "NETWORK_TIMEOUT",
});
//# sourceMappingURL=axios.js.map