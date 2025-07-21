import { OmniGeneric } from "../../types/generic";
import { Colored } from "../colored";

export const OmniElement: OmniGeneric<Element> = (props) => {
	const ele = props.children;

	const cls = ele.classList.length !== 0 ? `.${Array.from(ele.classList).join(".")}` : "";

	return (
		<Colored color="oklch(52.5% 0.223 3.958)">
			{`${ele.localName}${ele.id ? `#${ele.id}` : ""}`}
			<Colored color="oklch(70.5% 0.213 47.604)">{cls}</Colored>
		</Colored>
	);
};
