import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Omni } from "../components/common";
import { query } from "../components/derived/registry/registry";
import { Obigint } from "../components/primitives/bigint";
import { Oboolean } from "../components/primitives/boolean";
import { Onull } from "../components/primitives/null";
import { Onumber } from "../components/primitives/number";
import { Ostring } from "../components/primitives/string";
import { Osymbol } from "../components/primitives/symbol";
import { Oundefined } from "../components/primitives/undefined";

export function map(value: unknown): JSXElement {
	if (value === null) {
		return <Onull value={value}></Onull>;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let omni: Omni<any> | undefined;

	switch (typeof value) {
		case "undefined": {
			omni = Oundefined;
			break;
		}
		case "boolean": {
			omni = Oboolean;
			break;
		}
		case "number": {
			omni = Onumber;
			break;
		}
		case "bigint": {
			omni = Obigint;
			break;
		}
		case "string": {
			omni = Ostring;
			break;
		}
		case "symbol": {
			omni = Osymbol;
			break;
		}
		case "function": {
			return query(value);
		}
		case "object": {
			return query(value);
		}
	}

	if (!omni) {
		return <></>;
	}

	return (
		<Dynamic
			component={omni}
			value={value}
		></Dynamic>
	);
}
