import { Ocomponent } from "../core";

import { TObjectLike } from "../template/object-like.template";

export const Oobject: Ocomponent<object> = ({ value }) => {
	return (
		<TObjectLike
			value={value}
			bracket="{}"
			maxPreview={5}
			entries={Object.entries}
			primaryColor="oklch(0.869 0.022 252.894)"
			secondaryColor="oklch(0.129 0.042 264.695)"
		></TObjectLike>
	);
};
