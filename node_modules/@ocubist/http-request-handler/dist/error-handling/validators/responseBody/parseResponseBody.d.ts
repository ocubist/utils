import { z } from "zod";
/**
 * Parses and validates the response body using a provided schema.
 *
 * @template TResponseBody - The type of the response body.
 * @param {TResponseBody} responseBody - The response body to be validated.
 * @param {z.ZodSchema<TResponseBody>} [responseBodySchema] - The Zod schema to validate the response body.
 * @returns {TResponseBody} - The validated response body.
 * @throws {ResponseParsingError} - If the validation fails.
 */
export declare const parseResponseBody: <TResponseBody = any>(responseBody: TResponseBody, responseBodySchema?: z.ZodType<TResponseBody, z.ZodTypeDef, TResponseBody> | undefined) => TResponseBody;
//# sourceMappingURL=parseResponseBody.d.ts.map