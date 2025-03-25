import { JSXElement } from "solid-js";
import { Ocomponent } from "../components/core";

const DERIVED_REGISTRY: Array<{
	class: any;
	component: Ocomponent<any>;
}> = [];

export function registerDerived(
	derivedClass: any,
	component: Ocomponent<any>,
): void {
	DERIVED_REGISTRY.push({
		class: derivedClass,
		component,
	});
}

export function getDerived(object: any): JSXElement {
	for (let i = DERIVED_REGISTRY.length; i > 0; i--) {
		const registered = DERIVED_REGISTRY[i - 1];

		if (!(object instanceof registered.class)) continue;
		const Component = registered.component;
		return <Component value={object}></Component>;
	}
}
