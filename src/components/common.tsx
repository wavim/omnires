import { loadGFont } from "gfont-loader";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";

export type Ocomponent<T> = Component<{
	value: T;
}>;

loadGFont("JetBrains Mono");

const GLOBAL_STYLES = `
	.omni {
		display: inline-block;
		vertical-align: text-top;
		font-family: "JetBrains Mono";
	}
`;
document.head.insertAdjacentHTML(
	"beforeend",
	`<style>${GLOBAL_STYLES}</style>`,
);

export const O: Component<{
	color: string;
	children: any;
	class?: string;
	style?: string;
}> = (props) => {
	const Colored = styled("div")`
		color: ${props.color};
	`;
	return (
		<Colored
			class={`omni${props.class ? ` ${props.class}` : ""}`}
			style={props.style}
		>
			{props.children}
		</Colored>
	);
};
