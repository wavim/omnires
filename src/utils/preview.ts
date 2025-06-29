/* eslint-disable @typescript-eslint/no-explicit-any */

export function preview(value: any): string {
	const type = typeof value;

	if (value === null || value === undefined) {
		return String(value);
	}

	if (type === "object" || type === "function" || type === "symbol") {
		const name = (value as object).constructor.name;

		if (!("size" in value) && !("length" in value)) {
			return name;
		}

		return `${name}(${("size" in value
			? (value as { size: number }).size
			: (value as { length: number }).length
		).toFixed()})`;
	}

	return String(value);
}
