import { listlike } from "../list-like";

export const OmniTypedArray = listlike<
	| Int8Array
	| Uint8Array
	| Uint8ClampedArray
	| Int16Array
	| Uint16Array
	| Int32Array
	| Uint32Array
	| Float16Array
	| Float32Array
	| Float64Array
	| BigInt64Array
	| BigUint64Array
>(
	(a) => a.entries(),

	"[]",
	":",
	false,

	"oklch(76.8% 0.233 130.85)",
	"oklch(45.3% 0.124 130.933)",
);
