import { Ocomponent } from "../core";

import { O } from "../core";

export const Obigint: Ocomponent<bigint> = ({ value }) => (
	<O color="oklch(0.527 0.154 150.069)">{`${value}n`}</O>
);
