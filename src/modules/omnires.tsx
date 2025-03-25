import { Dynamic, render as mount } from "solid-js/web";

import { map } from "./mapper";

export class Omnires {
	//MO TODO options
	constructor() {}

	render<T extends HTMLElement>(value: any, container: T): T {
		mount(
			() => (
				<Dynamic
					component={map(value)}
					value={value}
				></Dynamic>
			),
			container,
		);
		return container;
	}

	/**
	 * WARNING: Make sure you know what you are doing.
	 * 
	 * Sanitize expression if you don't trust user input.
	 */
	renderEval<T extends HTMLElement>(expression: string, container: T): T {
		return this.render(new Function(`return ${expression};`)(), container);
	}
}
