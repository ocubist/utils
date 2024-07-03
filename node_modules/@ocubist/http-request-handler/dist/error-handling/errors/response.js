"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseParsingError = void 0;
var useApiHandlerErrorAlchemy_1 = require("../useApiHandlerErrorAlchemy");
var responseErrorsAlchemy = (0, useApiHandlerErrorAlchemy_1.useApiHandlerErrorAlchemy)("ResponseErrors");
/**
 * Error representing an issue parsing the server response.
 */
exports.ResponseParsingError = responseErrorsAlchemy.craftMysticError({
    name: "ResponseParsingError",
    cause: "Error parsing server response",
    severity: "unexpected",
    errorCode: "DATA_SERIALIZATION_ERROR",
});
//# sourceMappingURL=response.js.map