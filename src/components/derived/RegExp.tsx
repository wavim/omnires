import { O, Omni } from "../common";

export const ORegExp: Omni<RegExp> = (props) => {
	return (
		<O color="oklch(0.718 0.202 349.761)">
			/<O color="oklch(0.627 0.194 149.214)">{props.value.source}</O>/
			{props.value.flags}
		</O>
	);
};
