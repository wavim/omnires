import { stringify } from "../mapper/stringify";
import { Oklch } from "../types/oklch";
import { OmniPrimitive, Primitive } from "../types/primitive";

export function primitive<T extends Primitive>(color: Oklch): OmniPrimitive<T> {
	return (props) => {
		return (
			<div
				class="omnires"
				style={{ color }}
			>
				{stringify(props.children)}
			</div>
		);
	};
}
