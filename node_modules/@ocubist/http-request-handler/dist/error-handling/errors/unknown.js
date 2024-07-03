"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = void 0;
var useApiHandlerErrorAlchemy_1 = require("../useApiHandlerErrorAlchemy");
var unknownErrorsAlchemy = (0, useApiHandlerErrorAlchemy_1.useApiHandlerErrorAlchemy)("UnknownErrors");
/**
 * Error representing an unexpected error where the cause is unknown.
 */
exports.UnexpectedError = unknownErrorsAlchemy.craftMysticError({
    name: "UnexpectedError",
    cause: "The cause is unknown and might need attention",
    severity: "unexpected",
    errorCode: "UNKNOWN_ERROR",
});
//# sourceMappingURL=unknown.js.map