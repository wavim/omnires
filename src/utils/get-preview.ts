export function getPreview(value: any): string {
	const type = typeof value;
	if (
		value !== null &&
		(type === "function" || type === "object" || type === "symbol")
	) {
		return `${Object.getPrototypeOf(value).constructor.name}${
			Array.isArray(value) ? `(${value.length})` : ""
		}`;
	}
	return `${value}`;
}
