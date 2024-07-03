"use strict";
// import { z } from "zod";
// import {
//   executeFactoryFunctionsRequest,
//   executeFactoryFunctionsRequestWithoutRequestBody,
// } from "../helpers/executeFactoryFunctionsRequest";
// import { HttpResponse } from "../types/HttpResponse";
// import { PathParams } from "../types/PathParams";
// import { QueryParams } from "../types/QueryParams";
// import {
//   UseHttpRequestHandlerProps,
//   FactoryFunctionPropsWithoutRequestBody,
//   FactoryFunctionProps,
// } from "../types/UseHttpRequestHandlerProps";
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
exports.useHttpRequestHandler = void 0;
// /**
//  * Custom hook to handle HTTP requests with various methods.
//  *
//  * @param {UseHttpRequestHandlerProps} props - The properties required to set up the HTTP request handler.
//  * @returns {Object} - The crafted HTTP request functions.
//  */
// export const useHttpRequestHandler = (props: UseHttpRequestHandlerProps) => {
//   const mainProps = props;
//   /**
//    * Craft a GET request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TResponseBody
//    * @param {FactoryFunctionPropsWithoutRequestBody<TPathParams, TQueryParams, TResponseBody>} factoryProps - The properties required to craft the GET request.
//    * @returns {Function} - The crafted GET request function.
//    */
//   const craftGetRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionPropsWithoutRequestBody<
//       TPathParams,
//       TQueryParams,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a GET request.
//      *
//      * @param {Object} params - The parameters for the GET request.
//      * @param {TPathParams} params.pathParams - The path parameters for the GET request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the GET request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, never, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequestWithoutRequestBody({
//         mainProps,
//         factoryProps,
//         params,
//         method: "get",
//       });
//     };
//   };
//   /**
//    * Craft a POST request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TRequestBody
//    * @template TResponseBody
//    * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the POST request.
//    * @returns {Function} - The crafted POST request function.
//    */
//   const craftPostRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TRequestBody = any,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionProps<
//       TPathParams,
//       TQueryParams,
//       TRequestBody,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a POST request.
//      *
//      * @param {Object} params - The parameters for the POST request.
//      * @param {TPathParams} params.pathParams - The path parameters for the POST request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the POST request.
//      * @param {TRequestBody} params.requestBody - The request body for the POST request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {RequestBodyParsingError} - If the request body is invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//       requestBody: TRequestBody;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequest({
//         mainProps,
//         factoryProps,
//         params,
//         method: "post",
//       });
//     };
//   };
//   /**
//    * Craft a PUT request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TRequestBody
//    * @template TResponseBody
//    * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the PUT request.
//    * @returns {Function} - The crafted PUT request function.
//    */
//   const craftPutRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TRequestBody = any,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionProps<
//       TPathParams,
//       TQueryParams,
//       TRequestBody,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a PUT request.
//      *
//      * @param {Object} params - The parameters for the PUT request.
//      * @param {TPathParams} params.pathParams - The path parameters for the PUT request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the PUT request.
//      * @param {TRequestBody} params.requestBody - The request body for the PUT request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {RequestBodyParsingError} - If the request body is invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//       requestBody: TRequestBody;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequest({
//         mainProps,
//         factoryProps,
//         params,
//         method: "put",
//       });
//     };
//   };
//   /**
//    * Craft a DELETE request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TResponseBody
//    * @param {FactoryFunctionPropsWithoutRequestBody<TPathParams, TQueryParams, TResponseBody>} factoryProps - The properties required to craft the DELETE request.
//    * @returns {Function} - The crafted DELETE request function.
//    */
//   const craftDeleteRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionPropsWithoutRequestBody<
//       TPathParams,
//       TQueryParams,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a DELETE request.
//      *
//      * @param {Object} params - The parameters for the DELETE request.
//      * @param {TPathParams} params.pathParams - The path parameters for the DELETE request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the DELETE request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, never, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequestWithoutRequestBody({
//         mainProps,
//         factoryProps,
//         params,
//         method: "delete",
//       });
//     };
//   };
//   /**
//    * Craft a PATCH request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TRequestBody
//    * @template TResponseBody
//    * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the PATCH request.
//    * @returns {Function} - The crafted PATCH request function.
//    */
//   const craftPatchRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TRequestBody = any,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionProps<
//       TPathParams,
//       TQueryParams,
//       TRequestBody,
//       TResponseBody
//     >
//   ): Function => {
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//       requestBody: TRequestBody;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>
//     > => {
//       /**
//        * Executes a PATCH request.
//        *
//        * @param {Object} params - The parameters for the PATCH request.
//        * @param {TPathParams} params.pathParams - The path parameters for the PATCH request.
//        * @param {TQueryParams} params.queryParams - The query parameters for the PATCH request.
//        * @param {TRequestBody} params.requestBody - The request body for the PATCH request.
//        * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
//        * @throws {PathParameterParsingError} - If the path parameters are invalid.
//        * @throws {QueryParsingError} - If the query parameters are invalid.
//        * @throws {RequestBodyParsingError} - If the request body is invalid.
//        * @throws {HttpResponseError} - If the server responds with an error status code.
//        * @throws {NetworkError} - If there is a network connectivity issue.
//        * @throws {TimeoutError} - If the request times out.
//        * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//        * @throws {UnexpectedError} - If an unexpected error occurs.
//        */
//       return executeFactoryFunctionsRequest({
//         mainProps,
//         factoryProps,
//         params,
//         method: "patch",
//       });
//     };
//   };
//   /**
//    * Craft an OPTIONS request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TResponseBody
//    * @param {FactoryFunctionPropsWithoutRequestBody<TPathParams, TQueryParams, TResponseBody>} factoryProps - The properties required to craft the OPTIONS request.
//    * @returns {Function} - The crafted OPTIONS request function.
//    */
//   const craftOptionsRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionPropsWithoutRequestBody<
//       TPathParams,
//       TQueryParams,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a OPTIONS request.
//      *
//      * @param {Object} params - The parameters for the OPTIONS request.
//      * @param {TPathParams} params.pathParams - The path parameters for the OPTIONS request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the OPTIONS request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, never, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequestWithoutRequestBody({
//         mainProps,
//         factoryProps,
//         params,
//         method: "options",
//       });
//     };
//   };
//   /**
//    * Craft a HEAD request function.
//    *
//    * @returns {Function} - The crafted HEAD request function.
//    */
//   const craftHeadRequest = (): Function => {
//     /**
//      * Executes a HEAD request.
//      *
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (): Promise<HttpResponse> => {
//       return executeFactoryFunctionsRequestWithoutRequestBody({
//         mainProps,
//         method: "head",
//         factoryProps: {
//           pathParamsSchema: z.object({}),
//           queryParamsSchema: z.object({}),
//         },
//         params: { pathParams: {}, queryParams: {} },
//       });
//     };
//   };
//   /**
//    * Craft a PURGE request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TRequestBody
//    * @template TResponseBody
//    * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the PURGE request.
//    * @returns {Function} - The crafted PURGE request function.
//    */
//   const craftPurgeRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TRequestBody = any,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionProps<
//       TPathParams,
//       TQueryParams,
//       TRequestBody,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a PURGE request.
//      *
//      * @param {Object} params - The parameters for the PURGE request.
//      * @param {TPathParams} params.pathParams - The path parameters for the PURGE request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the PURGE request.
//      * @param {TRequestBody} params.requestBody - The request body for the PURGE request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {RequestBodyParsingError} - If the request body is invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//       requestBody: TRequestBody;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequest({
//         mainProps,
//         factoryProps,
//         params,
//         method: "purge",
//       });
//     };
//   };
//   /**
//    * Craft a LINK request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TRequestBody
//    * @template TResponseBody
//    * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the LINK request.
//    * @returns {Function} - The crafted LINK request function.
//    */
//   const craftLinkRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TRequestBody = any,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionProps<
//       TPathParams,
//       TQueryParams,
//       TRequestBody,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a LINK request.
//      *
//      * @param {Object} params - The parameters for the LINK request.
//      * @param {TPathParams} params.pathParams - The path parameters for the LINK request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the LINK request.
//      * @param {TRequestBody} params.requestBody - The request body for the LINK request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {RequestBodyParsingError} - If the request body is invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//       requestBody: TRequestBody;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequest({
//         mainProps,
//         factoryProps,
//         params,
//         method: "link",
//       });
//     };
//   };
//   /**
//    * Craft an UNLINK request function.
//    *
//    * @template TPathParams
//    * @template TQueryParams
//    * @template TRequestBody
//    * @template TResponseBody
//    * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the UNLINK request.
//    * @returns {Function} - The crafted UNLINK request function.
//    */
//   const craftUnlinkRequest = <
//     TPathParams = PathParams,
//     TQueryParams = QueryParams,
//     TRequestBody = any,
//     TResponseBody = any
//   >(
//     factoryProps: FactoryFunctionProps<
//       TPathParams,
//       TQueryParams,
//       TRequestBody,
//       TResponseBody
//     >
//   ): Function => {
//     /**
//      * Executes a UNLINK request.
//      *
//      * @param {Object} params - The parameters for the UNLINK request.
//      * @param {TPathParams} params.pathParams - The path parameters for the UNLINK request.
//      * @param {TQueryParams} params.queryParams - The query parameters for the UNLINK request.
//      * @param {TRequestBody} params.requestBody - The request body for the UNLINK request.
//      * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
//      * @throws {PathParameterParsingError} - If the path parameters are invalid.
//      * @throws {QueryParsingError} - If the query parameters are invalid.
//      * @throws {RequestBodyParsingError} - If the request body is invalid.
//      * @throws {HttpResponseError} - If the server responds with an error status code.
//      * @throws {NetworkError} - If there is a network connectivity issue.
//      * @throws {TimeoutError} - If the request times out.
//      * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
//      * @throws {UnexpectedError} - If an unexpected error occurs.
//      */
//     return async (params: {
//       pathParams: TPathParams;
//       queryParams: TQueryParams;
//       requestBody: TRequestBody;
//     }): Promise<
//       HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>
//     > => {
//       return executeFactoryFunctionsRequest({
//         mainProps,
//         factoryProps,
//         params,
//         method: "unlink",
//       });
//     };
//   };
//   return {
//     craftGetRequest,
//     craftPostRequest,
//     craftPutRequest,
//     craftDeleteRequest,
//     craftPatchRequest,
//     craftOptionsRequest,
//     craftHeadRequest,
//     craftPurgeRequest,
//     craftLinkRequest,
//     craftUnlinkRequest,
//   };
// };
var zod_1 = require("zod");
var executeFactoryFunctionsRequest_1 = require("../helpers/executeFactoryFunctionsRequest");
/**
 * Custom hook to handle HTTP requests with various methods.
 *
 * @param {UseHttpRequestHandlerProps} props - The properties required to set up the HTTP request handler.
 * @returns {Object} - The crafted HTTP request functions.
 */
var useHttpRequestHandler = function (props) {
    var mainProps = props;
    /**
     * Craft a GET request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TResponseBody
     * @param {FactoryFunctionPropsWithoutRequestBody<TPathParams, TQueryParams, TResponseBody>} factoryProps - The properties required to craft the GET request.
     * @returns {Function} - The crafted GET request function.
     */
    var craftGetRequest = function (factoryProps) {
        /**
         * Executes a GET request.
         *
         * @param {Object} params - The parameters for the GET request.
         * @param {TPathParams} params.pathParams - The path parameters for the GET request.
         * @param {TQueryParams} params.queryParams - The query parameters for the GET request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequestWithoutRequestBody)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "get",
                    })];
            });
        }); };
    };
    /**
     * Craft a POST request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TRequestBody
     * @template TResponseBody
     * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the POST request.
     * @returns {Function} - The crafted POST request function.
     */
    var craftPostRequest = function (factoryProps) {
        /**
         * Executes a POST request.
         *
         * @param {Object} params - The parameters for the POST request.
         * @param {TPathParams} params.pathParams - The path parameters for the POST request.
         * @param {TQueryParams} params.queryParams - The query parameters for the POST request.
         * @param {TRequestBody} params.requestBody - The request body for the POST request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {RequestBodyParsingError} - If the request body is invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequest)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "post",
                    })];
            });
        }); };
    };
    /**
     * Craft a PUT request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TRequestBody
     * @template TResponseBody
     * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the PUT request.
     * @returns {Function} - The crafted PUT request function.
     */
    var craftPutRequest = function (factoryProps) {
        /**
         * Executes a PUT request.
         *
         * @param {Object} params - The parameters for the PUT request.
         * @param {TPathParams} params.pathParams - The path parameters for the PUT request.
         * @param {TQueryParams} params.queryParams - The query parameters for the PUT request.
         * @param {TRequestBody} params.requestBody - The request body for the PUT request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {RequestBodyParsingError} - If the request body is invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequest)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "put",
                    })];
            });
        }); };
    };
    /**
     * Craft a DELETE request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TResponseBody
     * @param {FactoryFunctionPropsWithoutRequestBody<TPathParams, TQueryParams, TResponseBody>} factoryProps - The properties required to craft the DELETE request.
     * @returns {Function} - The crafted DELETE request function.
     */
    var craftDeleteRequest = function (factoryProps) {
        /**
         * Executes a DELETE request.
         *
         * @param {Object} params - The parameters for the DELETE request.
         * @param {TPathParams} params.pathParams - The path parameters for the DELETE request.
         * @param {TQueryParams} params.queryParams - The query parameters for the DELETE request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequestWithoutRequestBody)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "delete",
                    })];
            });
        }); };
    };
    /**
     * Craft a PATCH request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TRequestBody
     * @template TResponseBody
     * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the PATCH request.
     * @returns {Function} - The crafted PATCH request function.
     */
    var craftPatchRequest = function (factoryProps) {
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /**
                 * Executes a PATCH request.
                 *
                 * @param {Object} params - The parameters for the PATCH request.
                 * @param {TPathParams} params.pathParams - The path parameters for the PATCH request.
                 * @param {TQueryParams} params.queryParams - The query parameters for the PATCH request.
                 * @param {TRequestBody} params.requestBody - The request body for the PATCH request.
                 * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
                 * @throws {PathParameterParsingError} - If the path parameters are invalid.
                 * @throws {QueryParsingError} - If the query parameters are invalid.
                 * @throws {RequestBodyParsingError} - If the request body is invalid.
                 * @throws {HttpResponseError} - If the server responds with an error status code.
                 * @throws {NetworkError} - If there is a network connectivity issue.
                 * @throws {TimeoutError} - If the request times out.
                 * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
                 * @throws {UnexpectedError} - If an unexpected error occurs.
                 */
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequest)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "patch",
                    })];
            });
        }); };
    };
    /**
     * Craft an OPTIONS request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TResponseBody
     * @param {FactoryFunctionPropsWithoutRequestBody<TPathParams, TQueryParams, TResponseBody>} factoryProps - The properties required to craft the OPTIONS request.
     * @returns {Function} - The crafted OPTIONS request function.
     */
    var craftOptionsRequest = function (factoryProps) {
        /**
         * Executes an OPTIONS request.
         *
         * @param {Object} params - The parameters for the OPTIONS request.
         * @param {TPathParams} params.pathParams - The path parameters for the OPTIONS request.
         * @param {TQueryParams} params.queryParams - The query parameters for the OPTIONS request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, never, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequestWithoutRequestBody)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "options",
                    })];
            });
        }); };
    };
    /**
     * Craft a HEAD request function.
     *
     * @returns {Function} - The crafted HEAD request function.
     */
    var craftHeadRequest = function () {
        /**
         * Executes a HEAD request.
         *
         * @returns {Promise<HttpResponse<{}, {}, never, never>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequestWithoutRequestBody)({
                        mainProps: mainProps,
                        method: "head",
                        factoryProps: {
                            pathParamsSchema: zod_1.z.object({}),
                            queryParamsSchema: zod_1.z.object({}),
                        },
                        params: { pathParams: {}, queryParams: {} },
                    })];
            });
        }); };
    };
    /**
     * Craft a PURGE request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TRequestBody
     * @template TResponseBody
     * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the PURGE request.
     * @returns {Function} - The crafted PURGE request function.
     */
    var craftPurgeRequest = function (factoryProps) {
        /**
         * Executes a PURGE request.
         *
         * @param {Object} params - The parameters for the PURGE request.
         * @param {TPathParams} params.pathParams - The path parameters for the PURGE request.
         * @param {TQueryParams} params.queryParams - The query parameters for the PURGE request.
         * @param {TRequestBody} params.requestBody - The request body for the PURGE request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {RequestBodyParsingError} - If the request body is invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequest)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "purge",
                    })];
            });
        }); };
    };
    /**
     * Craft a LINK request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TRequestBody
     * @template TResponseBody
     * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the LINK request.
     * @returns {Function} - The crafted LINK request function.
     */
    var craftLinkRequest = function (factoryProps) {
        /**
         * Executes a LINK request.
         *
         * @param {Object} params - The parameters for the LINK request.
         * @param {TPathParams} params.pathParams - The path parameters for the LINK request.
         * @param {TQueryParams} params.queryParams - The query parameters for the LINK request.
         * @param {TRequestBody} params.requestBody - The request body for the LINK request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {RequestBodyParsingError} - If the request body is invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequest)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "link",
                    })];
            });
        }); };
    };
    /**
     * Craft an UNLINK request function.
     *
     * @template TPathParams
     * @template TQueryParams
     * @template TRequestBody
     * @template TResponseBody
     * @param {FactoryFunctionProps<TPathParams, TQueryParams, TRequestBody, TResponseBody>} factoryProps - The properties required to craft the UNLINK request.
     * @returns {Function} - The crafted UNLINK request function.
     */
    var craftUnlinkRequest = function (factoryProps) {
        /**
         * Executes an UNLINK request.
         *
         * @param {Object} params - The parameters for the UNLINK request.
         * @param {TPathParams} params.pathParams - The path parameters for the UNLINK request.
         * @param {TQueryParams} params.queryParams - The query parameters for the UNLINK request.
         * @param {TRequestBody} params.requestBody - The request body for the UNLINK request.
         * @returns {Promise<HttpResponse<TPathParams, TQueryParams, TRequestBody, TResponseBody>>} - The HTTP response.
         * @throws {PathParameterParsingError} - If the path parameters are invalid.
         * @throws {QueryParsingError} - If the query parameters are invalid.
         * @throws {RequestBodyParsingError} - If the request body is invalid.
         * @throws {HttpResponseError} - If the server responds with an error status code.
         * @throws {NetworkError} - If there is a network connectivity issue.
         * @throws {TimeoutError} - If the request times out.
         * @throws {UnexpectedAxiosError} - If an unexpected Axios error occurs.
         * @throws {UnexpectedError} - If an unexpected error occurs.
         */
        return function (params) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, executeFactoryFunctionsRequest_1.executeFactoryFunctionsRequest)({
                        mainProps: mainProps,
                        factoryProps: factoryProps,
                        params: params,
                        method: "unlink",
                    })];
            });
        }); };
    };
    var returnType = {
        craftGetRequest: craftGetRequest,
        craftPostRequest: craftPostRequest,
        craftPutRequest: craftPutRequest,
        craftDeleteRequest: craftDeleteRequest,
        craftPatchRequest: craftPatchRequest,
        craftOptionsRequest: craftOptionsRequest,
        craftHeadRequest: craftHeadRequest,
        craftPurgeRequest: craftPurgeRequest,
        craftLinkRequest: craftLinkRequest,
        craftUnlinkRequest: craftUnlinkRequest,
    };
    return returnType;
};
exports.useHttpRequestHandler = useHttpRequestHandler;
//# sourceMappingURL=useHttpRequestHandler.js.map