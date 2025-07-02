import { OmniGeneric } from "../../types/generic";
import { Colored } from "../colored";

export const OmniPromise: OmniGeneric<Promise<unknown>> = () => {
	return (
		<Colored color="oklch(62.3% 0.214 259.815)">
			Promise
			<Colored color="oklch(70.7% 0.165 254.624)">{"<Pending>"}</Colored>
		</Colored>
	);
};
