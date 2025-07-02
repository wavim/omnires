import "./index.css";

import { register } from "./registry/register";

register();

import { render as mount } from "solid-js/web";
import { elementify } from "./mapper/elementify";

/**
 * Mounts rendered `value` into `container`.
 * @returns `container`
 */
export function render<T extends HTMLElement>(value: unknown, container: T): T {
	mount(() => elementify(value), container);

	return container;
}

/**
 * Wraps rendered `value` into a `tag` element.
 * @returns the `tag` element
 */
export function wrap<T extends keyof HTMLElementTagNameMap>(
	tag: T,
	value: unknown,
): HTMLElementTagNameMap[T] {
	return render(value, document.createElement(tag));
}

/**
 * **WARNING**: Make sure you know what you are doing.
 * Sanitize expression if you can't trust user input.
 *
 * Mounts rendered `expression` into `container`
 * after parsing it with JavaScript.
 *
 * @returns `container`
 */
export function renderEval<T extends HTMLElement>(expression: string, container: T): T {
	// eslint-disable-next-line @typescript-eslint/no-implied-eval, @typescript-eslint/no-unsafe-call
	return render(new Function(`return ${expression};`)(), container);
}

/**
 * **WARNING**: Make sure you know what you are doing.
 * Sanitize expression if you can't trust user input.
 *
 * Wraps rendered `expression` into a `tag` element
 * after parsing it with JavaScript.
 *
 * @returns the `tag` element
 */
export function wrapEval<T extends keyof HTMLElementTagNameMap>(
	tag: T,
	expression: string,
): HTMLElementTagNameMap[T] {
	return renderEval(expression, document.createElement(tag));
}
