import { OArray } from "../Array";
import { ODate } from "../Date";
import { OElement } from "../Element";
import { OError } from "../Error";
import { OFunction } from "../Function";
import { OMap } from "../Map";
import { OObject } from "../Object";
import { OPromise } from "../Promise";
import { ORegExp } from "../RegExp";
import { OSet } from "../Set";
import { OUintArray } from "../UintArray";
import { register } from "./registry";

export function registerAll(): void {
	register(Object, OObject);

	register(Array, OArray);
	register(Uint16Array, OUintArray);
	register(Uint32Array, OUintArray);
	register(Uint8Array, OUintArray);

	register(Function, OFunction);
	register(Promise, OPromise);
	register(RegExp, ORegExp);
	register(Error, OError);
	register(Date, ODate);
	register(Map, OMap);
	register(Set, OSet);

	register(Element, OElement);
}
