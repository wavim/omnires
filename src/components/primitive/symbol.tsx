import { O, Ocomponent } from "../core";

export const Osymbol: Ocomponent<symbol> = ({ value }) => (
	<O color="oklch(0.712 0.194 13.428)">{String(value)}</O>
);
