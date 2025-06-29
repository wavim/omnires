import { Omni } from "../common";
import { ObjectLike } from "../templates/object-like.template";

export const OUintArray: Omni<Uint8Array | Uint16Array | Uint32Array> = (props) => {
	return (
		<ObjectLike
			entries={props.value.entries()}
			preview={5}
			paren="[]"
			pColor="oklch(0.768 0.233 130.85)"
			sColor="oklch(0.453 0.124 130.933)"
			list
		></ObjectLike>
	);
};
