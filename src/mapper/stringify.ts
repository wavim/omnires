export function stringify(value: unknown): string {
	if (value === null) {
		return "null";
	}

	switch (typeof value) {
		case "undefined": {
			return "undefined";
		}

		case "boolean": {
			return String(value);
		}

		case "number": {
			return Number.isInteger(value) ? String(value) : value.toFixed(2);
		}

		case "bigint": {
			return `${String(value)}n`;
		}

		case "string": {
			return stringifyString(value);
		}

		case "symbol": {
			return String(value);
		}

		default: {
			return stringifyGeneric(value);
		}
	}
}

function stringifyString(string: string): string {
	let quote: "'" | '"' | "`" = "'";

	if (string.includes("'")) {
		if (string.includes('"')) {
			if (string.includes("`")) {
				string = string.replaceAll("'", "\\'");
				quote = "'";
			} else {
				quote = "`";
			}
		} else {
			quote = '"';
		}
	}

	return `${quote}${string}${quote}`;
}

function stringifyGeneric(generic: object): string {
	const type = generic.constructor.name;

	if ("length" in generic) {
		return `${type}(${String(generic.length)})`;
	}

	if ("size" in generic) {
		return `${type}(${String(generic.size)})`;
	}

	return type;
}
