import { OptionalRetryOptions, RetryOptions } from "../../../types/RetryOptions";
/**
 * Parses and validates the retry options, merging them with default values.
 *
 * @param {OptionalRetryOptions} [retryOptions] - The retry options to be validated.
 * @returns {RetryOptions} - The validated and merged retry options.
 * @throws {RetryOptionsParsingError} - If the validation fails.
 */
export declare const parseRetryOptions: (retryOptions?: OptionalRetryOptions) => RetryOptions;
//# sourceMappingURL=parseRetryOptions.d.ts.map