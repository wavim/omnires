import { Omni } from "../common";
import { ObjectLike } from "../templates/object-like.template";

export const OArray: Omni<unknown[]> = (props) => {
	return (
		<ObjectLike
			entries={props.value.entries()}
			preview={5}
			bracket="[]"
			themeColor="oklch(0.702 0.183 293.541)"
			previewColor="oklch(0.381 0.176 304.987)"
			collection
		></ObjectLike>
	);
};
