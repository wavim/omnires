export * from "./modules/omnires";

import { O as _O, Ocomponent } from "./components/common";
import { TObjectLike as _TObjectLike } from "./components/templates/object-like.template";
import { register as _register } from "./components/derived/registry/registry";

/**
 * Namespace for Omnires plugins development.
 */
export namespace Omni {
	/**
	 * Basic component to help conform with Omnires styles with utility props.
	 */
	export const O = _O;

	/**
	 * Template component for object-like types, e.g. Array, Map etc.
	 */
	export const TObjectLike = _TObjectLike;

	/**
	 * Registers a component that will render a specific derived class.
	 *
	 * @param derivedClass class constructor, e.g. Date / Error
	 * @param component the component that will receive props `{ value: derivedClass }`
	 */
	export function register<T extends abstract new (...args: any) => any>(
		derivedClass: T,
		component: Ocomponent<InstanceType<T>>,
	): void {
		_register(derivedClass, component);
	}
}
