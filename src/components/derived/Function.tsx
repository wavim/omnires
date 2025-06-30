import { O, Omni } from "../common";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const OFunction: Omni<Function> = (props) => {
	return (
		<O color="oklch(0.585 0.233 277.117)">{`${
			props.value.name !== "" ? `[${props.value.name}] ` : ""
		}${String(props.value)}`}</O>
	);
};
