import { O, Ocomponent } from "../common";

export const ORegExp: Ocomponent<RegExp> = (props) => (
	<O color="oklch(0.718 0.202 349.761)">
		/<O color="oklch(0.525 0.223 3.958)">{props.value.source}</O>/
		{props.value.flags}
	</O>
);
