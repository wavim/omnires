import { JSXElement } from "solid-js";

export type BaseType =
	| "undefined"
	| "boolean"
	| "number"
	| "bigint"
	| "string"
	| "symbol"
	| "function"
	| "object";

//MO TODO add support for specific types
export type OmniresComponent = ({
	value,
	string,
}: {
	value: BaseType;
	string: string;
}) => JSXElement;
