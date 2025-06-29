import { Omni } from "../common";
import { ObjectLike } from "../templates/object-like.template";

export const OObject: Omni<object> = (props) => {
	return (
		<ObjectLike
			entries={Object.entries(props.value)}
			preview={5}
			bracket="{}"
			themeColor="oklch(0.828 0.189 84.429)"
			previewColor="oklch(0.75 0.183 55.934)"
		></ObjectLike>
	);
};
