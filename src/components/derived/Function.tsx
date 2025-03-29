import { O, Ocomponent } from "../common";

export const OFunction: Ocomponent<Function> = (props) => (
	<O color="oklch(0.585 0.233 277.117)">{`${
		props.value.name !== "" ? `[${props.value.name}] ` : ""
	}${props.value}`}</O>
);
