import { O, Ocomponent } from "../common";

export const Obigint: Ocomponent<bigint> = (props) => (
	<O color="oklch(0.457 0.24 277.023)">{`${props.value}n`}</O>
);
