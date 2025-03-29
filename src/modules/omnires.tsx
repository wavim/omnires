import { render as mount } from "solid-js/web";

import { map } from "./mapper";

import "../components/derived/registry/register";

export class Omnires {
	render<T extends HTMLElement>(value: any, container: T): T {
		mount(() => map(value), container);
		return container;
	}
	wrap(value: any): HTMLSpanElement {
		return this.render(value, document.createElement("span"));
	}

	/**
	 * WARNING: Make sure you know what you are doing.
	 *
	 * Sanitize expression if you don't trust user input.
	 */
	renderEval<T extends HTMLElement>(expression: string, container: T): T {
		return this.render(new Function(`return ${expression};`)(), container);
	}
	/**
	 * WARNING: Make sure you know what you are doing.
	 *
	 * Sanitize expression if you don't trust user input.
	 */
	wrapEval(expression: string): HTMLSpanElement {
		return this.renderEval(expression, document.createElement("span"));
	}
}
