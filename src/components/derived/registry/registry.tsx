/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSXElement } from "solid-js";
import { Omni } from "../../common";

type New<T> = new (...args: any[]) => T;

interface Entry<T> {
	construct: New<T>;
	component: Omni<T>;
}

const registry: Entry<any>[] = [];

export function register(construct: New<any>, component: Omni<any>): void {
	registry.push({ construct, component });
}

export function query(value: object): JSXElement {
	for (const { construct, component: Omni } of registry.toReversed()) {
		if (value instanceof construct) {
			return <Omni value={value}></Omni>;
		}
	}
}
