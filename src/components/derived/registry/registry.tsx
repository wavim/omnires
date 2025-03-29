import { JSXElement } from "solid-js";
import { Ocomponent } from "../../common";

const DERIVED_REGISTRY: Array<{
	class: any;
	component: Ocomponent<any>;
}> = [];

/**
 * Registers a component that will render a specific derived class,
 * you must implement the component in SolidJS.
 *
 * @param derivedClass class constructor, e.g. Date / Error
 * @param component the component that will receive props `{ value: derivedClass }`
 */
export function register(derivedClass: any, component: Ocomponent<any>): void {
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
