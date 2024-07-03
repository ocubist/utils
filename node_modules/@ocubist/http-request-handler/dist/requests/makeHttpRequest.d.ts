import { HttpResponse } from "../types/HttpResponse";
import { MakeHttpRequestProps } from "../types/MakeHttpRequestProps";
/**
 * Makes an HTTP request based on the provided parameters.
 *
 * @template TPathParams
 * @template TQueryParams
 * @template TRequestBody
 * @template TResponseBody
 * @param {MakeHttpRequestProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} params - The properties required to make the HTTP request.
 * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
 * @throws {QueryParsingError} - Error parsing query parameters.
 * @throws {RequestBodyParsingError} - Error parsing request body.
 * @throws {PathParameterParsingError} - Error parsing path parameters.
 * @throws {UrlValidationError} - The provided URL is invalid.
 * @throws {InvalidTimeoutError} - Invalid timeout provided.
 * @throws {RetryOptionsParsingError} - The provided RetryOptions are invalid.
 * @throws {HttpResponseError} - Server responded with an error status code.
 * @throws {NetworkError} - Network connectivity issue.
 * @throws {UnexpectedAxiosError} - An unexpected Axios error occurred.
 * @throws {TimeoutError} - The server took too long to send a response.
 * @throws {ResponseParsingError} - Error parsing server response.
 * @throws {UnexpectedError} - An unexpected error occurred.
 */
export declare const makeHttpRequest: <TPathParams = Record<string, string>, TQueryParams = Record<string, string | number | boolean | (string | number | boolean)[]>, TRequestBody = any, TResponseBody = any>(params: MakeHttpRequestProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>) => Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>;
//# sourceMappingURL=makeHttpRequest.d.ts.map