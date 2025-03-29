import { render as mount } from "solid-js/web";

import { map } from "./mapper";

import "../components/derived/registry/register";

/**
 * Mounts rendered `value` into `container` (either in or out of DOM).
 *
 * @returns `container`
 */
export function render<T extends HTMLElement>(value: any, container: T): T {
	mount(() => map(value), container);
	return container;
}

/**
 * Wraps rendered `value` into a `<span>` element.
 *
 * @returns the `<span>`
 */
export function wrap(value: any): HTMLSpanElement {
	return render(value, document.createElement("span"));
}

/**
 * **WARNING**: Make sure you know what you are doing.
 * Sanitize expression if you don't trust user input.
 *
 * Mounts rendered `expression` into `container` (either in or out of DOM)
 * after parsing it with JavaScript, e.g. `"[1,2]"` => `[1,2]`.
 *
 * @returns `container`
 */
export function renderEval<T extends HTMLElement>(
	expression: string,
	container: T,
): T {
	return render(new Function(`return ${expression};`)(), container);
}

/**
 * **WARNING**: Make sure you know what you are doing.
 * Sanitize expression if you don't trust user input.
 *
 * Wraps rendered `expression` into a `<span>` element
 * after parsing it with JavaScript, e.g. `"[1,2]"` => `[1,2]`.
 *
 * @returns the `<span>`
 */
export function wrapEval(expression: string): HTMLSpanElement {
	return renderEval(expression, document.createElement("span"));
}
