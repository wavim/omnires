import { O, Ocomponent } from "../common";

export const ODate: Ocomponent<Date> = (props) => (
	<O color="oklch(0.704 0.14 182.503)">{props.value.toLocaleString()}</O>
);
