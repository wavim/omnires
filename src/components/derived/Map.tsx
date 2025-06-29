import { Omni } from "../common";
import { ObjectLike } from "../templates/object-like.template";

export const OMap: Omni<Map<unknown, unknown>> = (props) => {
	return (
		<ObjectLike
			entries={props.value.entries()}
			preview={5}
			bracket="<>"
			themeColor="oklch(0.707 0.165 254.624)"
			previewColor="oklch(0.424 0.199 265.638)"
		></ObjectLike>
	);
};
