"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosErrorTransmuter = void 0;
var axios_1 = __importDefault(require("axios"));
var axios_2 = require("../errors/axios");
var useApiHandlerErrorAlchemy_1 = require("../useApiHandlerErrorAlchemy");
var axiosErrorsAlchemy = (0, useApiHandlerErrorAlchemy_1.useApiHandlerErrorAlchemy)("AxiosErrors");
/**
 * Detector function to determine if an error is an Axios error.
 *
 * @param {any} err - The error to be checked.
 * @returns {boolean} - True if the error is an Axios error, false otherwise.
 */
var axiosDetector = function (err) { return axios_1.default.isAxiosError(err); };
/**
 * Transmuter function to transform Axios errors into custom error types.
 *
 * @param {AxiosError} err - The Axios error to be transformed.
 * @returns {Error} - The transformed error.
 */
var axiosTransmuter = function (err) {
    var _a, _b, _c, _d;
    // Check for timeout errors
    if (err.code) {
        // ReadTimeoutError: Read timed out
        if (err.code === "ECONNABORTED") {
            return new axios_2.TimeoutError({
                message: "Request took too long to complete",
                origin: err,
                payload: {
                    config: err.config, // Axios request configuration
                    code: err.code, // Error code, 'ECONNABORTED'
                    message: err.message, // Error message from Axios
                    url: (_a = err.config) === null || _a === void 0 ? void 0 : _a.url, // Request URL
                    method: (_b = err.config) === null || _b === void 0 ? void 0 : _b.method, // Request method
                },
            });
        }
    }
    // Check if the error has a response and a status code
    if (err.response) {
        var status_1 = err.response.status;
        var statusText = err.response.statusText;
        var responseData = err.response.data;
        var errorMessage = "HTTP response error with status code ".concat(status_1);
        // Customize the error message based on the status code
        switch (status_1) {
            case 400:
                errorMessage = "Bad request";
                break;
            case 401:
                errorMessage = "Unauthorized access";
                break;
            case 402:
                errorMessage = "Payment required";
                break;
            case 403:
                errorMessage = "Forbidden access";
                break;
            case 404:
                errorMessage = "Resource not found";
                break;
            case 405:
                errorMessage = "Method not allowed";
                break;
            case 409:
                errorMessage = "Conflict with the current state of the resource";
                break;
            case 429:
                errorMessage = "Too many requests";
                break;
            default:
                // Keep the generic message for other status codes
                errorMessage = "HTTP response error with status code ".concat(status_1);
                break;
        }
        // HttpResponseError: Catch-all for HTTP response errors with specific messages
        return new axios_2.HttpResponseError({
            message: errorMessage,
            origin: err,
            payload: { status: status_1, statusText: statusText, responseData: responseData },
        });
    }
    // Check if the error is due to a network issue
    if (!err.response) {
        // NetworkError: No response received
        return new axios_2.NetworkError({
            message: "Network connectivity issue",
            origin: err,
            payload: {
                config: err.config, // Axios request configuration
                code: err.code, // Error code, e.g., 'ECONNABORTED'
                message: err.message, // Error message from Axios
                url: (_c = err.config) === null || _c === void 0 ? void 0 : _c.url, // Request URL
                method: (_d = err.config) === null || _d === void 0 ? void 0 : _d.method, // Request method
            },
        });
    }
    return new axios_2.UnexpectedAxiosError({
        message: "An Axios-Error occurred that has not been identified.",
        origin: err,
    });
};
/**
 * Error transmuter for Axios errors.
 */
exports.axiosErrorTransmuter = axiosErrorsAlchemy.craftErrorTransmuter(axiosDetector, axiosTransmuter);
//# sourceMappingURL=axios.js.map