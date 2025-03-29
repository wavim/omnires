import { JSXElement } from "solid-js";
import { Ocomponent } from "../../common";

const DERIVED_REGISTRY: Array<{
	class: any;
	component: Ocomponent<any>;
}> = [];

export function register<T extends abstract new (...args: any) => any>(
	derivedClass: T,
	component: Ocomponent<InstanceType<T>>,
): void {
	DERIVED_REGISTRY.push({
		class: derivedClass,
		component,
	});
}

export function getComponent(value: any): JSXElement {
	for (let i = DERIVED_REGISTRY.length; i > 0; i--) {
		const registered = DERIVED_REGISTRY[i - 1];

		if (!(value instanceof registered.class)) continue;

		const Component = registered.component;
		return <Component value={value}></Component>;
	}
	return <></>;
}
