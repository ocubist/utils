"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkResponseFor2xx = exports.checkResponseFor5xx = void 0;
/**
 * Checks if the response status code indicates a server error (5xx).
 *
 * @param {AxiosResponse} response - The Axios response object.
 * @returns {boolean} - True if the status code is between 500 and 599, inclusive.
 */
var checkResponseFor5xx = function (response) {
    return response.status >= 500 && response.status <= 599;
};
exports.checkResponseFor5xx = checkResponseFor5xx;
/**
 * Checks if the response status code indicates a successful request (2xx).
 *
 * @param {AxiosResponse} response - The Axios response object.
 * @returns {boolean} - True if the status code is between 200 and 299, inclusive.
 */
var checkResponseFor2xx = function (response) {
    return response.status >= 200 && response.status <= 299;
};
exports.checkResponseFor2xx = checkResponseFor2xx;
//# sourceMappingURL=checkResponse.js.map