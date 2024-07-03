import { z } from "zod";
/**
 * Query parameters schema.
 */
export declare const QueryParams: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">]>>;
/**
 * Query parameters type.
 */
export type QueryParams = z.infer<typeof QueryParams>;
//# sourceMappingURL=QueryParams.d.ts.map