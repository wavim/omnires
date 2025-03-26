import { loadGFont } from "gfont-loader";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";

export type Ocomponent<T> = Component<{
	value: T;
}>;

loadGFont("JetBrains Mono");

document.head.insertAdjacentHTML(
	"beforeend",
	`<style>${`##
		.omni {
			display: inline-block;
			vertical-align: text-top;
			font-family: "JetBrains Mono";
		}
	##`}</style>`,
);

export const O: Component<{
	color: string;
	children: any;
	class?: string;
}> = ({ color, children, class: classes }) => {
	//MO TODO use color map configurable instead
	const Colored = styled("div")`##
		color: ${color};
	##`;
	return <Colored class={`omni ${classes}`}>{children}</Colored>;
};
