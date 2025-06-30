import { O, Omni } from "../common";

export const Obigint: Omni<bigint> = (props) => {
	return <O color="oklch(0.457 0.24 277.023)">{`${String(props.value)}n`}</O>;
};
