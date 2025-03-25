import { O, Ocomponent } from "../core";

export const Obigint: Ocomponent<bigint> = ({ value }) => (
	<O color="oklch(0.448 0.119 151.328)">{`${value}n`}</O>
);
