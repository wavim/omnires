import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";
import { OmniBigint } from "../primitive/components/bigint";
import { OmniBoolean } from "../primitive/components/boolean";
import { OmniNull } from "../primitive/components/null";
import { OmniNumber } from "../primitive/components/number";
import { OmniString } from "../primitive/components/string";
import { OmniSymbol } from "../primitive/components/symbol";
import { OmniUndefined } from "../primitive/components/undefined";
import { query } from "../registry/registry";

export function elementify(value: unknown): JSXElement {
	if (value === null) {
		return <OmniNull>{value}</OmniNull>;
	}

	switch (typeof value) {
		case "undefined": {
			return <OmniUndefined>{value}</OmniUndefined>;
		}

		case "boolean": {
			return <OmniBoolean>{value}</OmniBoolean>;
		}

		case "number": {
			return <OmniNumber>{value}</OmniNumber>;
		}

		case "bigint": {
			return <OmniBigint>{value}</OmniBigint>;
		}

		case "string": {
			return <OmniString>{value}</OmniString>;
		}

		case "symbol": {
			return <OmniSymbol>{value}</OmniSymbol>;
		}

		default: {
			return <Dynamic component={query(value).component}>{value}</Dynamic>;
		}
	}
}
