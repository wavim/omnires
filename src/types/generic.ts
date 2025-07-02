import { Component } from "solid-js";

export type Generic = object;

export type OmniGeneric<T extends Generic = Generic> = Component<{ children: T }>;
