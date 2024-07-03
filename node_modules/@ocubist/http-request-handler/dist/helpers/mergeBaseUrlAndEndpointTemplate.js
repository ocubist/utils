"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeBaseUrlAndEndpointTemplate = void 0;
/**
 * Merges the base URL and endpoint template into a single URL.
 *
 * @param {string} baseUrl - The base URL.
 * @param {string} endpointTemplate - The endpoint template.
 * @returns {string} - The merged URL.
 */
var mergeBaseUrlAndEndpointTemplate = function (baseUrl, endpointTemplate) {
    var theBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
    var theEndpoint = endpointTemplate.startsWith("/")
        ? endpointTemplate.slice(1)
        : endpointTemplate;
    return theBaseUrl + theEndpoint;
};
exports.mergeBaseUrlAndEndpointTemplate = mergeBaseUrlAndEndpointTemplate;
//# sourceMappingURL=mergeBaseUrlAndEndpointTemplate.js.map