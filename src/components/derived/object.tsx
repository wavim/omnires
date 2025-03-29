import { Ocomponent } from "../common";

import { TObjectLike } from "../templates/object-like.template";

export const OObject: Ocomponent<Object> = (props) => {
	return (
		<TObjectLike
			entries={Object.entries(props.value)}
			brackets="{}"
			preview={5}
			themeColor="oklch(0.828 0.189 84.429)"
			previewColor="oklch(0.75 0.183 55.934)"
		></TObjectLike>
	);
};
