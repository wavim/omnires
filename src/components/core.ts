import { loadGFont } from "gfont-loader";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";

loadGFont("JetBrains Mono");

export type Ocomponent<T> = Component<{
	value: T;
}>;

export const O = styled("div")`
	display: inline-block;
	font-family: "JetBrains Mono";
	color: ${(props) => props.color};
`;
