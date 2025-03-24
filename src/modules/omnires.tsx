import { Dynamic, render as solidRender } from "solid-js/web";
import { getBase } from "../registry/registry";

import "../registry/register";

export class Omnires {
	constructor() {}

	render<T extends HTMLElement>(value: any, container: T): T {
		solidRender(
			() => (
				<Dynamic
					component={getBase(typeof value)}
					value={value}
					string={`${value}`}
				></Dynamic>
			),
			container,
		);
		return container;
	}
}
