import { OmniGeneric } from "../../types/generic";
import { Colored } from "../colored";

export const OmniRegExp: OmniGeneric<RegExp> = (props) => {
	return (
		<Colored color="oklch(70.9% 0.01 56.259)">
			/
			<Colored color="oklch(44.4% 0.011 73.639)">{props.children.source}</Colored>
			/{props.children.flags}
		</Colored>
	);
};
