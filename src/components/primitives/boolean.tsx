import { O, Ocomponent } from "../core";

export const Oboolean: Ocomponent<boolean> = ({ value }) => (
	<O color="oklch(0.546 0.245 262.881)">{`${value}`}</O>
);
