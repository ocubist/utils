import { AxiosResponse } from "axios";
/**
 * Checks if the response status code indicates a server error (5xx).
 *
 * @param {AxiosResponse} response - The Axios response object.
 * @returns {boolean} - True if the status code is between 500 and 599, inclusive.
 */
export declare const checkResponseFor5xx: (response: AxiosResponse) => boolean;
/**
 * Checks if the response status code indicates a successful request (2xx).
 *
 * @param {AxiosResponse} response - The Axios response object.
 * @returns {boolean} - True if the status code is between 200 and 299, inclusive.
 */
export declare const checkResponseFor2xx: (response: AxiosResponse) => boolean;
//# sourceMappingURL=checkResponse.d.ts.map