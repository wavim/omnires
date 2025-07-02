/* eslint-disable @typescript-eslint/no-explicit-any */

import { OmniGeneric } from "../types/generic";

interface Entry {
	construct: new (...args: any[]) => unknown;
	component: OmniGeneric<any>;
}

const registry: Entry[] = [];

export function reg(construct: Entry["construct"], component: Entry["component"]): void {
	registry.push({ construct, component });
}

export function query(value: object): Entry {
	for (const entry of registry.toReversed()) {
		if (value instanceof entry.construct) {
			return entry;
		}
	}

	return registry[0];
}
