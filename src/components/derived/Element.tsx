import { O, Omni } from "../common";

export const OElement: Omni<Element> = (props) => {
	const ele = props.value;

	return (
		<O color="oklch(0.525 0.223 3.958)">
			{`${ele.localName}${ele.id ? `#${ele.id}` : ""}`}
			<O color="oklch(0.705 0.213 47.604)">
				{ele.className ? `.${Array.from(ele.classList).join(".")}` : ""}
			</O>
		</O>
	);
};
