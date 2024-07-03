"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = void 0;
var request_1 = require("../../errors/request");
/**
 * Validates and parses a URL string.
 *
 * @param {string} url - The URL string to be validated.
 * @returns {string} - The validated URL string.
 * @throws {UrlValidationError} - If the URL is invalid.
 */
var parseUrl = function (url) {
    try {
        return new URL(url).toString();
    }
    catch (_a) {
        throw new request_1.UrlValidationError({
            message: "The provided URL is invalid",
            origin: new Error("Invalid URL"),
            payload: { url: url },
        });
    }
};
exports.parseUrl = parseUrl;
//# sourceMappingURL=parseUrl.js.map