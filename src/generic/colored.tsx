import { Component, JSXElement } from "solid-js";
import { Omni } from "../omni";
import { Oklch } from "../types/oklch";

export const Colored: Component<{ color: Oklch; children: JSXElement }> = (props) => {
	return <Omni style={{ color: props.color }}>{props.children}</Omni>;
};
