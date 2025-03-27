import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Ocomponent } from "../components/core";

import { Onull } from "../components/primitive/null";
import { Oundefined } from "../components/primitive/undefined";
import { Oboolean } from "../components/primitive/boolean";
import { Onumber } from "../components/primitive/number";
import { Obigint } from "../components/primitive/bigint";
import { Ostring } from "../components/primitive/string";
import { Osymbol } from "../components/primitive/symbol";

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
