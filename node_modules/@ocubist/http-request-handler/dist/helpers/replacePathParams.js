"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacePathParams = void 0;
/**
 * Replaces the path parameters in the URL template with their corresponding values.
 *
 * @param {string} urlTemplate - The URL template containing path parameters.
 * @param {PathParams} pathParams - The path parameters to replace in the URL template.
 * @returns {string} - The URL with the path parameters replaced.
 */
var replacePathParams = function (urlTemplate, pathParams) {
    return Object.keys(pathParams).reduce(function (url, key) {
        var value = pathParams[key];
        if (value !== undefined) {
            return url.replace("{".concat(key, "}"), encodeURIComponent(value));
        }
        return url;
    }, urlTemplate);
};
exports.replacePathParams = replacePathParams;
//# sourceMappingURL=replacePathParams.js.map