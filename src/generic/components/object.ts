import { listlike } from "../list-like";

export const OmniObject = listlike<object>(
	Object.entries,

	"{}",
	":",
	true,

	"oklch(82.8% 0.189 84.429)",
	"oklch(75% 0.183 55.934)",
);
