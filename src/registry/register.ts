import { OmniArray } from "../generic/components/array";
import { OmniDate } from "../generic/components/date";
import { OmniElement } from "../generic/components/element";
import { OmniError } from "../generic/components/error";
import { OmniFunction } from "../generic/components/function";
import { OmniMap } from "../generic/components/map";
import { OmniObject } from "../generic/components/object";
import { OmniPromise } from "../generic/components/promise";
import { OmniRegExp } from "../generic/components/reg-exp";
import { OmniSet } from "../generic/components/set";
import { OmniTypedArray } from "../generic/components/typed-array";
import { reg } from "./registry";

export function register(): void {
	reg(Object, OmniObject);
	reg(Array, OmniArray);

	reg(Map, OmniMap);
	reg(Set, OmniSet);

	reg(Int8Array, OmniTypedArray);
	reg(Uint8Array, OmniTypedArray);
	reg(Uint8ClampedArray, OmniTypedArray);
	reg(Int16Array, OmniTypedArray);
	reg(Uint16Array, OmniTypedArray);
	reg(Int32Array, OmniTypedArray);
	reg(Uint32Array, OmniTypedArray);
	reg(Float16Array, OmniTypedArray);
	reg(Float32Array, OmniTypedArray);
	reg(Float64Array, OmniTypedArray);
	reg(BigInt64Array, OmniTypedArray);
	reg(BigUint64Array, OmniTypedArray);

	reg(Function, OmniFunction);
	reg(Promise, OmniPromise);
	reg(Element, OmniElement);
	reg(RegExp, OmniRegExp);
	reg(Error, OmniError);
	reg(Date, OmniDate);
}
