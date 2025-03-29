import { register } from "./registry";

import { OObject } from "../Object";
import { OArray } from "../Array";
import { OUintArray } from "../UintArray";
import { OMap } from "../Map";
import { OSet } from "../Set";

import { OFunction } from "../Function";
import { OBoolean } from "../Boolean";
import { OPromise } from "../Promise";
import { OError } from "../Error";
import { ORegExp } from "../RegExp";
import { ODate } from "../Date";

register(Object, OObject);
register(Array, OArray);
register(Uint8Array, OUintArray);
register(Uint16Array, OUintArray);
register(Uint32Array, OUintArray);
register(Map, OMap);
register(Set, OSet);

register(Function, OFunction);
register(Boolean, OBoolean);
register(Promise, OPromise);
register(Error, OError);
register(RegExp, ORegExp);
register(Date, ODate);
