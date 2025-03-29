import { Ocomponent } from "../common";

import { TObjectLike } from "../templates/object-like.template";

export const OUintArray: Ocomponent<Uint8Array | Uint16Array | Uint32Array> = (
	props,
) => {
	return (
		<TObjectLike
			entries={props.value.entries()}
			brackets="[]"
			preview={5}
			themeColor="oklch(0.768 0.233 130.85)"
			previewColor="oklch(0.453 0.124 130.933)"
			isCollection
		></TObjectLike>
	);
};
