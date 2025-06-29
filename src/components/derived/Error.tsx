import { O, Omni } from "../common";
import { ObjectLike } from "../templates/object-like.template";

export const OError: Omni<Error> = (props) => {
	const error = props.value;

	return (
		<O color="oklch(0.637 0.237 25.331)">
			{`${error.name}\u00a0`}
			<ObjectLike
				entries={
					error.cause
						? [
								["message", error.message],
								["cause", error.cause],
							]
						: [["message", error.message]]
				}
				preview={2}
				paren="{}"
				pColor="oklch(0.637 0.237 25.331)"
				sColor="oklch(0.704 0.191 22.216)"
			></ObjectLike>
		</O>
	);
};
