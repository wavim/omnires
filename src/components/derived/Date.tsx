import { O, Omni } from "../common";

export const ODate: Omni<Date> = (props) => {
	return <O color="oklch(0.704 0.14 182.503)">{props.value.toLocaleString()}</O>;
};
