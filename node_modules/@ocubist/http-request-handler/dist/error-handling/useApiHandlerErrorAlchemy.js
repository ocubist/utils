"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApiHandlerErrorAlchemy = void 0;
var error_alchemy_1 = require("@ocubist/error-alchemy");
/**
 * Hook to use the error alchemy for the HTTP request handler.
 *
 * @param {string} context - The context for the error alchemy.
 * @returns {ReturnType<typeof useErrorAlchemy>} - The error alchemy instance for the given context.
 */
var useApiHandlerErrorAlchemy = function (context) {
    return (0, error_alchemy_1.useErrorAlchemy)("http-request-handler", context);
};
exports.useApiHandlerErrorAlchemy = useApiHandlerErrorAlchemy;
//# sourceMappingURL=useApiHandlerErrorAlchemy.js.map