import { Ocomponent } from "../core";

import { TObjectLike } from "../template/object-like.template";

export const Oarray: Ocomponent<any[]> = ({ value }) => {
	return (
		<TObjectLike
			value={value}
			bracket="[]"
			maxPreview={5}
			entries={Object.entries}
			primaryColor="oklch(0.811 0.111 293.571)"
			secondaryColor="oklch(0.381 0.176 304.987)"
			hideKeys
		></TObjectLike>
	);
};
