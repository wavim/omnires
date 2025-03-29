import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Ocomponent } from "../components/common";

import { Onull } from "../components/primitives/null";
import { Oundefined } from "../components/primitives/undefined";
import { Oboolean } from "../components/primitives/boolean";
import { Onumber } from "../components/primitives/number";
import { Obigint } from "../components/primitives/bigint";
import { Ostring } from "../components/primitives/string";
import { Osymbol } from "../components/primitives/symbol";

import { getComponent } from "../components/derived/registry/registry";

export function map<T>(value: T): JSXElement {
	if (value === null) return <Onull value={value as null}></Onull>;

	let component!: Ocomponent<T>;
	switch (typeof value) {
		case "undefined": {
			component = Oundefined as Ocomponent<T>;
			break;
		}
		case "boolean": {
			component = Oboolean as Ocomponent<T>;
			break;
		}
		case "number": {
			component = Onumber as Ocomponent<T>;
			break;
		}
		case "bigint": {
			component = Obigint as Ocomponent<T>;
			break;
		}
		case "string": {
			component = Ostring as Ocomponent<T>;
			break;
		}
		case "symbol": {
			component = Osymbol as Ocomponent<T>;
			break;
		}
		case "object": {
			return getComponent(value);
		}
		case "function": {
			return getComponent(value);
		}
	}
	return (
		<Dynamic
			component={component}
			value={value}
		></Dynamic>
	);
}
