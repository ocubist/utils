import { z } from "zod";
/**
 * Optional retry options schema.
 * Defines the optional retry options for HTTP requests.
 */
export declare const OptionalRetryOptions: z.ZodObject<{
    /**
     * The number of retry attempts.
     * Optional and must be between 0 and 5.
     */
    retries: z.ZodOptional<z.ZodNumber>;
    /**
     * The initial delay before the first retry attempt in milliseconds.
     * Optional and must be between 100 and 5000 ms.
     */
    initialDelay: z.ZodOptional<z.ZodNumber>;
    /**
     * The multiplier to apply to the delay between subsequent retries.
     * Optional and must be between 1 and 2.
     */
    backoffMultiplier: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    retries?: number | undefined;
    initialDelay?: number | undefined;
    backoffMultiplier?: number | undefined;
}, {
    retries?: number | undefined;
    initialDelay?: number | undefined;
    backoffMultiplier?: number | undefined;
}>;
/**
 * Optional retry options type.
 * Infers the type for the optional retry options schema.
 */
export type OptionalRetryOptions = z.infer<typeof OptionalRetryOptions>;
/**
 * Retry options schema.
 * Defines the required retry options for HTTP requests.
 */
export declare const RetryOptions: z.ZodObject<{
    /**
     * The number of retry attempts.
     * Must be between 0 and 5.
     */
    retries: z.ZodNumber;
    /**
     * The initial delay before the first retry attempt in milliseconds.
     * Must be between 100 and 5000 ms.
     */
    initialDelay: z.ZodNumber;
    /**
     * The multiplier to apply to the delay between subsequent retries.
     * Must be between 1 and 2.
     */
    backoffMultiplier: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    retries: number;
    initialDelay: number;
    backoffMultiplier: number;
}, {
    retries: number;
    initialDelay: number;
    backoffMultiplier: number;
}>;
/**
 * Retry options type.
 * Infers the type for the retry options schema.
 */
export type RetryOptions = z.infer<typeof RetryOptions>;
/**
 * Default retry options.
 * Provides default values for the retry options.
 */
export declare const defaultRetryOptions: Required<z.infer<typeof RetryOptions>>;
//# sourceMappingURL=RetryOptions.d.ts.map