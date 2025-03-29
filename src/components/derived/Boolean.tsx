import { O, Ocomponent } from "../common";

export const OBoolean: Ocomponent<Boolean> = (props) => (
	<O color="oklch(0.424 0.199 265.638)">
		Boolean(<O color="oklch(0.588 0.158 241.966)">{`${props.value}`}</O>)
	</O>
);
