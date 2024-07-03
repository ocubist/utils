"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRetryOptions = exports.RetryOptions = exports.OptionalRetryOptions = void 0;
var zod_1 = require("zod");
/**
 * Optional retry options schema.
 * Defines the optional retry options for HTTP requests.
 */
exports.OptionalRetryOptions = zod_1.z.object({
    /**
     * The number of retry attempts.
     * Optional and must be between 0 and 5.
     */
    retries: zod_1.z.number().min(0).max(5).optional(), // Maximum of 5 retries
    /**
     * The initial delay before the first retry attempt in milliseconds.
     * Optional and must be between 100 and 5000 ms.
     */
    initialDelay: zod_1.z.number().min(100).max(5000).optional(), // Initial delay between 100 ms and 5,000 ms
    /**
     * The multiplier to apply to the delay between subsequent retries.
     * Optional and must be between 1 and 2.
     */
    backoffMultiplier: zod_1.z.number().min(1).max(2).optional(), // Backoff multiplier between 1 and 2
});
/**
 * Retry options schema.
 * Defines the required retry options for HTTP requests.
 */
exports.RetryOptions = zod_1.z.object({
    /**
     * The number of retry attempts.
     * Must be between 0 and 5.
     */
    retries: zod_1.z.number().min(0).max(5), // Maximum of 5 retries
    /**
     * The initial delay before the first retry attempt in milliseconds.
     * Must be between 100 and 5000 ms.
     */
    initialDelay: zod_1.z.number().min(100).max(5000), // Initial delay between 100 ms and 5,000 ms
    /**
     * The multiplier to apply to the delay between subsequent retries.
     * Must be between 1 and 2.
     */
    backoffMultiplier: zod_1.z.number().min(1).max(2), // Backoff multiplier between 1 and 2
});
/**
 * Default retry options.
 * Provides default values for the retry options.
 */
exports.defaultRetryOptions = {
    retries: 3, // Default retries set to 3
    initialDelay: 1000, // Default initial delay set to 1,000 ms (1 second)
    backoffMultiplier: 2, // Default backoff multiplier set to 2
};
//# sourceMappingURL=RetryOptions.js.map