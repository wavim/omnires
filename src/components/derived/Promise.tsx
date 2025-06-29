import { O, Omni } from "../common";

export const OPromise: Omni<Promise<unknown>> = () => {
	return <O color="oklch(0.707 0.165 254.624)">{"Promise <pending>"}</O>;
};
