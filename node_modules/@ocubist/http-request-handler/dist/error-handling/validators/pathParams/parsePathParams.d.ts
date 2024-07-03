import { z } from "zod";
/**
 * Parses and validates path parameters using a provided schema.
 *
 * @template TPathParams - The type of the path parameters.
 * @param {TPathParams} [pathParams] - The path parameters to be validated.
 * @param {z.ZodSchema} [pathParamsSchema] - The Zod schema to validate the path parameters.
 * @returns {TPathParams | undefined} - The validated path parameters or undefined if not provided.
 * @throws {PathParameterParsingError} - If the validation fails or if the schema is provided without path parameters.
 */
export declare const parsePathParams: <TPathParams = Record<string, string>>(pathParams?: TPathParams | undefined, pathParamsSchema?: z.ZodSchema) => TPathParams | undefined;
//# sourceMappingURL=parsePathParams.d.ts.map