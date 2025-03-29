import { O, Ocomponent } from "../common";

export const Osymbol: Ocomponent<symbol> = (props) => (
	<O color="oklch(0.712 0.194 13.428)">{String(props.value)}</O>
);
