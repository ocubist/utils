"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParams = void 0;
var zod_1 = require("zod");
/**
 * Query parameters schema.
 */
exports.QueryParams = zod_1.z.record(zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.array(zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()])),
]));
//# sourceMappingURL=QueryParams.js.map