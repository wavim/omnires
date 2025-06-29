import { O, Omni } from "../common";

export const Oboolean: Omni<boolean> = (props) => {
	return <O color="oklch(0.588 0.158 241.966)">{String(props.value)}</O>;
};
