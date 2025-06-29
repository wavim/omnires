import { O, Omni } from "../common";

export const Osymbol: Omni<symbol> = (props) => {
	return <O color="oklch(0.712 0.194 13.428)">{String(props.value)}</O>;
};
