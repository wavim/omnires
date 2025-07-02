import { OmniGeneric } from "../../types/generic";
import { Colored } from "../colored";
import { listlike } from "../list-like";

export const OmniError: OmniGeneric<Error> = (props) => {
	const err = props.children;

	return (
		<Colored color="oklch(63.7% 0.237 25.331)">
			{err.name}
			{"\u00a0"}
			<ErrorBody>{err}</ErrorBody>
		</Colored>
	);
};

const ErrorBody = listlike<Error>(
	(e) => {
		const list: [string, unknown][] = [["message", e.message]];

		if (e.cause) {
			list.push(["cause", e.cause]);
		}

		return list;
	},

	"{}",
	":",
	true,

	"oklch(63.7% 0.237 25.331)",
	"oklch(70.4% 0.191 22.216)",
);
