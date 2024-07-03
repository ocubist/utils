import { z } from "zod";
/**
 * Parses and validates query parameters using a provided schema.
 *
 * @template TQueryParams - The type of the query parameters.
 * @param {TQueryParams} [queryParams] - The query parameters to be validated.
 * @param {z.ZodSchema} [queryParamsSchema] - The Zod schema to validate the query parameters.
 * @returns {TQueryParams | undefined} - The validated query parameters or undefined if not provided.
 * @throws {QueryParsingError} - If the validation fails or if the schema is provided without query parameters.
 */
export declare const parseQueryParams: <TQueryParams = Record<string, string | number | boolean | (string | number | boolean)[]>>(queryParams?: TQueryParams | undefined, queryParamsSchema?: z.ZodSchema) => TQueryParams | undefined;
//# sourceMappingURL=parseQueryParams.d.ts.map