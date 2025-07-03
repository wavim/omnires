import { Component, JSX } from "solid-js";

export const Omni: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div
			{...props}
			class="omnires"
		></div>
	);
};
