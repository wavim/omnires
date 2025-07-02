import { listlike } from "../list-like";

export const OmniSet = listlike<Set<unknown>>(
	(s) => s.values().map((v, i) => [i, v]),

	"()",
	":",
	false,

	"oklch(60% 0.118 184.704)",
	"oklch(43.7% 0.078 188.216)",
);
