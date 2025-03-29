import { Ocomponent } from "../common";

import { TObjectLike } from "../templates/object-like.template";

export const OMap: Ocomponent<Map<any, any>> = (props) => {
	return (
		<TObjectLike
			entries={props.value.entries()}
			brackets="<>"
			preview={5}
			themeColor="oklch(0.707 0.165 254.624)"
			previewColor="oklch(0.424 0.199 265.638)"
		></TObjectLike>
	);
};
