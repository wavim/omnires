import { Ocomponent } from "../common";

import { TObjectLike } from "../templates/object-like.template";

export const OSet: Ocomponent<Set<any>> = (props) => {
	return (
		<TObjectLike
			entries={props.value.values().map((value, i) => [i, value])}
			brackets="()"
			preview={5}
			themeColor="oklch(0.6 0.118 184.704)"
			previewColor="oklch(0.437 0.078 188.216)"
			isCollection
		></TObjectLike>
	);
};
