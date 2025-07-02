import { OmniGeneric } from "../../types/generic";
import { Colored } from "../colored";

export const OmniDate: OmniGeneric<Date> = (props) => {
	return (
		<Colored color="oklch(69.6% 0.17 162.48)">
			{props.children.toLocaleString()}
		</Colored>
	);
};
