import { O, Ocomponent } from "../common";

import { TObjectLike } from "../templates/object-like.template";

export const OError: Ocomponent<Error> = (props) => {
	const error = props.value;

	return (
		<>
			<O color="oklch(0.637 0.237 25.331)">{`${error.name}\u00a0`}</O>
			<TObjectLike
				entries={[
					["message", error.message],
					["cause", error.cause],
				]}
				brackets="{}"
				preview={2}
				themeColor="oklch(0.637 0.237 25.331)"
				previewColor="oklch(0.704 0.191 22.216)"
			></TObjectLike>
		</>
	);
};
