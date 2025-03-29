import { O, Ocomponent } from "../common";

export const Oboolean: Ocomponent<boolean> = (props) => (
	<O color="oklch(0.588 0.158 241.966)">{`${props.value}`}</O>
);
