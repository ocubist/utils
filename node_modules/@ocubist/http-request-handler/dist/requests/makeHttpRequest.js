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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.makeHttpRequest = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
var axios_1 = __importStar(require("axios"));
var unknown_1 = require("../error-handling/errors/unknown");
var axios_2 = require("../error-handling/transmuters/axios");
var parsePathParams_1 = require("../error-handling/validators/pathParams/parsePathParams");
var parseQueryParams_1 = require("../error-handling/validators/queryParams/parseQueryParams");
var parseRequestBody_1 = require("../error-handling/validators/requestBody/parseRequestBody");
var parseResponseBody_1 = require("../error-handling/validators/responseBody/parseResponseBody");
var parseRetryOptions_1 = require("../error-handling/validators/retryOptions/parseRetryOptions");
var parseTimeout_1 = require("../error-handling/validators/timeout/parseTimeout");
var checkResponse_1 = require("../helpers/checkResponse");
var mergeHeadersWithDefaults_1 = require("../helpers/mergeHeadersWithDefaults");
var replacePathParams_1 = require("../helpers/replacePathParams");
var parseUrl_1 = require("../error-handling/validators/url/parseUrl");
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
var makeHttpRequest = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var startTime, method, urlTemplate, logger, requestBody, url, status, responseBody, success, headers, attempts, duration, timeout, retryOptions, responseType, pathParams, queryParams, axiosConfig, firstError, _loop_1, state_1, err_1, endTime;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                startTime = performance.now();
                method = params.method, urlTemplate = params.urlTemplate, logger = params.logger;
                success = false;
                _j.label = 1;
            case 1:
                _j.trys.push([1, 6, , 7]);
                timeout = (0, parseTimeout_1.parseTimeout)(params.timeout);
                retryOptions = (0, parseRetryOptions_1.parseRetryOptions)(params.retryOptions);
                responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : "json";
                pathParams = (0, parsePathParams_1.parsePathParams)((_b = params.pathParams) === null || _b === void 0 ? void 0 : _b.val, (_c = params.pathParams) === null || _c === void 0 ? void 0 : _c.schema);
                // * URL
                url = (0, parseUrl_1.parseUrl)((0, replacePathParams_1.replacePathParams)(urlTemplate, pathParams !== null && pathParams !== void 0 ? pathParams : {}));
                queryParams = (0, parseQueryParams_1.parseQueryParams)((_d = params.queryParams) === null || _d === void 0 ? void 0 : _d.val, (_e = params.queryParams) === null || _e === void 0 ? void 0 : _e.schema);
                // * RequestBody
                requestBody = (0, parseRequestBody_1.parseRequestBody)((_f = params.requestBody) === null || _f === void 0 ? void 0 : _f.val, (_g = params.requestBody) === null || _g === void 0 ? void 0 : _g.schema);
                // * Headers
                headers = (0, mergeHeadersWithDefaults_1.mergeHeadersWithDefaults)((_h = params.headers) !== null && _h !== void 0 ? _h : {});
                axiosConfig = {
                    method: method,
                    url: url,
                    params: queryParams,
                    data: requestBody,
                    headers: headers,
                    timeout: timeout,
                    responseType: responseType,
                };
                firstError = undefined;
                _loop_1 = function () {
                    var response, endTime, httpResponse, errInRequest_1, isRetriable, delay_1;
                    return __generator(this, function (_k) {
                        switch (_k.label) {
                            case 0:
                                _k.trys.push([0, 2, , 6]);
                                return [4 /*yield*/, (0, axios_1.default)(axiosConfig)];
                            case 1:
                                response = _k.sent();
                                status = response.status;
                                responseBody = (0, parseResponseBody_1.parseResponseBody)(response.data, params.responseBodySchema);
                                success = (0, checkResponse_1.checkResponseFor2xx)(response);
                                endTime = performance.now();
                                duration = endTime - startTime;
                                httpResponse = {
                                    success: success,
                                    data: responseBody,
                                    status: status,
                                    // @ts-ignore
                                    headers: response.headers,
                                    axiosConfig: axiosConfig,
                                    requestProps: {
                                        url: url,
                                        headers: headers,
                                        method: method,
                                        responseType: responseType,
                                        retryOptions: retryOptions,
                                        timeout: timeout,
                                        pathParams: pathParams,
                                        queryParams: queryParams,
                                        requestBody: requestBody,
                                    },
                                    originalRequestProps: params,
                                    statusText: response.statusText,
                                    url: url,
                                    duration: duration,
                                    attempts: attempts,
                                };
                                if (attempts > 1) {
                                    httpResponse.attempts = attempts;
                                }
                                if (logger) {
                                    logger({
                                        attempts: attempts,
                                        method: method,
                                        success: success,
                                        urlTemplate: urlTemplate,
                                        headers: headers,
                                        requestBody: requestBody,
                                        responseBody: responseBody,
                                        status: status,
                                        url: url,
                                        duration: duration,
                                    });
                                }
                                return [2 /*return*/, { value: httpResponse }];
                            case 2:
                                errInRequest_1 = _k.sent();
                                if (!(errInRequest_1 instanceof axios_1.AxiosError)) return [3 /*break*/, 5];
                                if (firstError === undefined) {
                                    firstError = errInRequest_1;
                                }
                                isRetriable = !errInRequest_1.response || // Network-Error
                                    (errInRequest_1.response &&
                                        (0, checkResponse_1.checkResponseFor5xx)(errInRequest_1.response));
                                if (!isRetriable) return [3 /*break*/, 4];
                                delay_1 = retryOptions.initialDelay *
                                    Math.pow(retryOptions.backoffMultiplier, attempts - 1);
                                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                            case 3:
                                _k.sent();
                                return [2 /*return*/, "continue"];
                            case 4: throw axios_2.axiosErrorTransmuter.transmute(errInRequest_1);
                            case 5: throw errInRequest_1;
                            case 6: return [2 /*return*/];
                        }
                    });
                };
                attempts = 1;
                _j.label = 2;
            case 2:
                if (!(attempts - 1 <= retryOptions.retries)) return [3 /*break*/, 5];
                return [5 /*yield**/, _loop_1()];
            case 3:
                state_1 = _j.sent();
                if (typeof state_1 === "object")
                    return [2 /*return*/, state_1.value];
                _j.label = 4;
            case 4:
                attempts++;
                return [3 /*break*/, 2];
            case 5:
                // If all retries are exhausted, throw the first captured error
                if (firstError) {
                    throw axios_2.axiosErrorTransmuter.transmute(firstError);
                }
                // As a last resort, if no error was captured, throw an UnexpectedError
                throw new unknown_1.UnexpectedError({
                    message: "This error should not have happened. It occurred because all retries were exhausted and no error got thrown. Something went seriously wrong inside the makeHttpRequest-Function...",
                });
            case 6:
                err_1 = _j.sent();
                endTime = performance.now();
                duration = endTime - startTime;
                if (logger) {
                    logger({
                        attempts: attempts,
                        method: method,
                        success: success,
                        urlTemplate: urlTemplate,
                        headers: headers,
                        requestBody: requestBody,
                        responseBody: responseBody,
                        status: status,
                        url: url,
                        duration: duration,
                    });
                }
                if (err_1 instanceof error_alchemy_1.MysticError) {
                    // Inject params into payload
                    err_1.payload = __assign(__assign({}, err_1.payload), { params: params, duration: endTime - startTime });
                    throw err_1;
                }
                else {
                    throw new unknown_1.UnexpectedError({
                        message: "An unexpected error occurred",
                        origin: err_1,
                        payload: { params: params, duration: endTime - startTime },
                    }); // Inject params into payload
                }
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.makeHttpRequest = makeHttpRequest;
//# sourceMappingURL=makeHttpRequest.js.map