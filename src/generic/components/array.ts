import { listlike } from "../list-like";

export const OmniArray = listlike<unknown[]>(
	(a) => a.entries(),

	"[]",
	":",
	false,

	"oklch(70.2% 0.183 293.541)",
	"oklch(54.1% 0.281 293.009)",
);
