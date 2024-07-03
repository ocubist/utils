"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeFactoryFunctionsRequestWithoutRequestBody = exports.executeFactoryFunctionsRequest = void 0;
var mergeBaseUrlAndEndpointTemplate_1 = require("../helpers/mergeBaseUrlAndEndpointTemplate");
var makeHttpRequest_1 = require("../requests/makeHttpRequest");
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
var executeFactoryFunctionsRequest = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, baseUrl, mainHeaders, mainRetryOptions, mainTimeout, mainResponseType, mainLogger, _b, endpointTemplate, pathParamsSchema, queryParamsSchema, requestBodySchema, subHeaders, specifiedRetryOptions, specifiedTimeout, specifiedResponseType, responseBodySchema, specificLogger, _c, pathParams, queryParams, requestBody, method, urlTemplate, makeHttpRequestProps;
    var _d;
    return __generator(this, function (_e) {
        _a = props.mainProps, baseUrl = _a.baseUrl, mainHeaders = _a.headers, mainRetryOptions = _a.retryOptions, mainTimeout = _a.timeout, mainResponseType = _a.responseType, mainLogger = _a.logger, _b = props.factoryProps, endpointTemplate = _b.endpointTemplate, pathParamsSchema = _b.pathParamsSchema, queryParamsSchema = _b.queryParamsSchema, requestBodySchema = _b.requestBodySchema, subHeaders = _b.headers, specifiedRetryOptions = _b.retryOptions, specifiedTimeout = _b.timeout, specifiedResponseType = _b.responseType, responseBodySchema = _b.responseBodySchema, specificLogger = _b.logger, _c = props.params, pathParams = _c.pathParams, queryParams = _c.queryParams, requestBody = _c.requestBody, method = props.method;
        urlTemplate = (0, mergeBaseUrlAndEndpointTemplate_1.mergeBaseUrlAndEndpointTemplate)(baseUrl, endpointTemplate || "");
        makeHttpRequestProps = {
            urlTemplate: urlTemplate,
            method: method,
            headers: __assign(__assign({}, mainHeaders), subHeaders),
            timeout: specifiedTimeout !== null && specifiedTimeout !== void 0 ? specifiedTimeout : mainTimeout,
            retryOptions: __assign(__assign({}, (mainRetryOptions !== null && mainRetryOptions !== void 0 ? mainRetryOptions : {})), (specifiedRetryOptions !== null && specifiedRetryOptions !== void 0 ? specifiedRetryOptions : {})),
            responseType: specifiedResponseType !== null && specifiedResponseType !== void 0 ? specifiedResponseType : mainResponseType,
            responseBodySchema: responseBodySchema,
            pathParams: { val: pathParams, schema: pathParamsSchema },
            queryParams: { val: queryParams, schema: queryParamsSchema },
            requestBody: { val: requestBody, schema: requestBodySchema },
            logger: (_d = specificLogger !== null && specificLogger !== void 0 ? specificLogger : mainLogger) !== null && _d !== void 0 ? _d : undefined,
        };
        return [2 /*return*/, (0, makeHttpRequest_1.makeHttpRequest)(makeHttpRequestProps)];
    });
}); };
exports.executeFactoryFunctionsRequest = executeFactoryFunctionsRequest;
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
var executeFactoryFunctionsRequestWithoutRequestBody = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, exports.executeFactoryFunctionsRequest)(__assign(__assign({}, props), { factoryProps: __assign(__assign({}, props.factoryProps), { requestBodySchema: undefined }), params: __assign(__assign({}, props.params), { requestBody: undefined }) }))];
    });
}); };
exports.executeFactoryFunctionsRequestWithoutRequestBody = executeFactoryFunctionsRequestWithoutRequestBody;
//# sourceMappingURL=executeFactoryFunctionsRequest.js.map