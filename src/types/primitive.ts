import { Component } from "solid-js";

export type Primitive = null | undefined | boolean | number | bigint | string | symbol;

export type OmniPrimitive<T extends Primitive = Primitive> = Component<{ children: T }>;
