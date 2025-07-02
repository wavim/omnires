import { listlike } from "../list-like";

export const OmniMap = listlike<Map<unknown, unknown>>(
	(m) => m.entries(),

	"<>",
	"=>",
	true,

	"oklch(70.7% 0.165 254.624)",
	"oklch(42.4% 0.199 265.638)",
);
