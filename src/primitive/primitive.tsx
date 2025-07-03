import { stringify } from "../mapper/stringify";
import { Omni } from "../omni";
import { Oklch } from "../types/oklch";
import { OmniPrimitive, Primitive } from "../types/primitive";

export function primitive<T extends Primitive>(color: Oklch): OmniPrimitive<T> {
	return (props) => {
		return <Omni style={{ color }}>{stringify(props.children)}</Omni>;
	};
}
