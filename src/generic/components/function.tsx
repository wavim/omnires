import { OmniGeneric } from "../../types/generic";
import { Colored } from "../colored";

export const OmniFunction: OmniGeneric<(...args: unknown[]) => unknown> = (props) => {
	const fn = props.children;

	return (
		<Colored color="oklch(45.7% 0.24 277.023)">
			{fn.name !== "" ? `[${fn.name}]` : ""}
			<Colored color="oklch(58.5% 0.233 277.117)">{String(fn)}</Colored>
		</Colored>
	);
};
