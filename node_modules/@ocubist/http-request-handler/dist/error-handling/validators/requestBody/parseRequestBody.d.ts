import { z } from "zod";
/**
 * Parses and validates the request body using a provided schema.
 *
 * @template TRequestBody - The type of the request body.
 * @param {TRequestBody} [requestBody] - The request body to be validated.
 * @param {z.ZodSchema<TRequestBody>} [requestBodySchema] - The Zod schema to validate the request body.
 * @returns {TRequestBody | undefined} - The validated request body or undefined if not provided.
 * @throws {RequestBodyParsingError} - If the validation fails or if the schema is provided without a request body.
 */
export declare const parseRequestBody: <TRequestBody = any>(requestBody?: TRequestBody | undefined, requestBodySchema?: z.ZodType<TRequestBody, z.ZodTypeDef, TRequestBody> | undefined) => TRequestBody | undefined;
//# sourceMappingURL=parseRequestBody.d.ts.map