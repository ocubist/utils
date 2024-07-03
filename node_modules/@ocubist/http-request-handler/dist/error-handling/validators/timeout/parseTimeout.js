"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimeout = void 0;
var Timeout_1 = require("../../../types/Timeout");
var request_1 = require("../../errors/request");
/**
 * Parses and validates the timeout value, ensuring it falls within the allowed range.
 *
 * @param {number} [timeout] - The timeout value to be validated.
 * @returns {number} - The validated timeout value or the default timeout if not provided.
 * @throws {InvalidTimeoutError} - If the timeout value is out of the allowed range.
 */
var parseTimeout = function (timeout) {
    if (timeout !== undefined && (timeout < 500 || timeout > 30000)) {
        throw new request_1.InvalidTimeoutError({
            message: "Timeout must be at least 500 and at max 30000",
        });
    }
    return timeout !== null && timeout !== void 0 ? timeout : Timeout_1.defaultTimeout;
};
exports.parseTimeout = parseTimeout;
//# sourceMappingURL=parseTimeout.js.map