import { Component, JSXElement } from "solid-js";
import { styled } from "solid-styled-components";

export type Omni<T> = Component<{ value: T }>;

export const O: Component<{
	color: string;
	class?: string;

	children: JSXElement;
}> = (props) => {
	const Colored = styled("div")`
		color: ${props.color};
	`;

	return <Colored class={`omni ${props.class ?? ""}`}>{props.children}</Colored>;
};
