import { ExecuteFactoryFunctionsRequestProps } from "../types/ExecuteFactoryFunctionsRequestProps";
import { HttpResponse } from "../types/HttpResponse";
/**
 * Executes an HTTP request using the provided factory function properties.
 *
 * @template TPathParams
 * @template TQueryParams
 * @template TRequestBody
 * @template TResponseBody
 * @param {ExecuteFactoryFunctionsRequestProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} props - The properties required to execute the request.
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
export declare const executeFactoryFunctionsRequest: <TPathParams, TQueryParams, TRequestBody, TResponseBody>(props: ExecuteFactoryFunctionsRequestProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>) => Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>;
/**
 * Executes an HTTP request without a request body using the provided factory function properties.
 *
 * @template TPathParams
 * @template TQueryParams
 * @template TResponseBody
 * @param {Omit<ExecuteFactoryFunctionsRequestProps<TPathParams, TQueryParams, never, TResponseBody>, "factoryProps"> & { factoryProps: Omit<ExecuteFactoryFunctionsRequestProps<TPathParams, TQueryParams, never, TResponseBody>["factoryProps"], "requestBodySchema">; }} props - The properties required to execute the request.
 * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
 * @throws {QueryParsingError} - Error parsing query parameters.
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
export declare const executeFactoryFunctionsRequestWithoutRequestBody: <TPathParams = Record<string, string>, TQueryParams = Record<string, string | number | boolean | (string | number | boolean)[]>, TResponseBody = any>(props: Omit<ExecuteFactoryFunctionsRequestProps<TPathParams, TQueryParams, never, TResponseBody>, "factoryProps"> & {
    factoryProps: Omit<import("..").FactoryFunctionProps<TPathParams, TQueryParams, never, TResponseBody>, "requestBodySchema">;
}) => Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>;
//# sourceMappingURL=executeFactoryFunctionsRequest.d.ts.map