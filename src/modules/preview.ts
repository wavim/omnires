// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preview(value: any): string {
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
			return value;
		}
		case "symbol": {
			return String(value);
		}
		case "function": {
			return "Function";
		}
		case "object": {
			const name = (value as object).constructor.name;

			if (!("size" in value) && !("length" in value)) {
				return name;
			}

			return `${name}(${("size" in value
				? (value as { size: number }).size
				: (value as { length: number }).length
			).toFixed()})`;
		}
	}
}
