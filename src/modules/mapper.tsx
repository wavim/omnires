import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Ocomponent } from "../components/core";

import { Onull } from "../components/primitives/null";
import { Oundefined } from "../components/primitives/undefined";
import { Oboolean } from "../components/primitives/boolean";
import { Onumber } from "../components/primitives/number";
import { Obigint } from "../components/primitives/bigint";
import { Ostring } from "../components/primitives/string";
import { Osymbol } from "../components/primitives/symbol";

import { getDerived } from "../registry/registry";

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
			return getDerived(value);
		}
		case "function": {
			//MO TODO add base function component
			return getDerived(value);
		}
		default: {
			component = () => <></>;
			break;
		}
	}
	return (
		<Dynamic
			component={component}
			value={value}
		></Dynamic>
	);
}
