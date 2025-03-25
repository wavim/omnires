import { Ocomponent } from "../components/core";

import { Onull } from "../components/primitives/null";
import { Oundefined } from "../components/primitives/undefined";
import { Oboolean } from "../components/primitives/boolean";
import { Onumber } from "../components/primitives/number";
import { Obigint } from "../components/primitives/bigint";
import { Ostring } from "../components/primitives/string";
import { Osymbol } from "../components/primitives/symbol";

export function map<T>(value: T): Ocomponent<T> {
	if (value === null) return Onull as Ocomponent<T>;

	switch (typeof value) {
		case "undefined": {
			return Oundefined as Ocomponent<T>;
		}
		case "boolean": {
			return Oboolean as Ocomponent<T>;
		}
		case "number": {
			return Onumber as Ocomponent<T>;
		}
		case "bigint": {
			return Obigint as Ocomponent<T>;
		}
		case "string": {
			return Ostring as Ocomponent<T>;
		}
		case "symbol": {
			return Osymbol as Ocomponent<T>;
		}
		//MO TODO
		case "object":
		case "function":
		default: {
			return () => <></>;
		}
	}
}
