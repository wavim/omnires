import { O, Omni } from "../common";

export const Onumber: Omni<number> = (props) => {
	return <O color="oklch(0.705 0.213 47.604)">{props.value}</O>;
};
