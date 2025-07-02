import { Component, JSXElement } from "solid-js";
import { Oklch } from "../types/oklch";

export const Colored: Component<{ color: Oklch; children: JSXElement }> = (props) => {
	return (
		<div
			class="omni"
			style={{ color: props.color }}
		>
			{props.children}
		</div>
	);
};
