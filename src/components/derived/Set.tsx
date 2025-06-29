import { Omni } from "../common";
import { ObjectLike } from "../templates/object-like.template";

export const OSet: Omni<Set<unknown>> = (props) => {
	return (
		<ObjectLike
			entries={props.value.values().map((value, i) => [i, value])}
			preview={5}
			bracket="()"
			themeColor="oklch(0.6 0.118 184.704)"
			previewColor="oklch(0.437 0.078 188.216)"
			collection
		></ObjectLike>
	);
};
