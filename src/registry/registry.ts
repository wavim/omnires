import { BaseType, OmniresComponent } from "../types/types";

const BASE_REGISTRY: Map<BaseType, OmniresComponent> = new Map();

export function registerBase(
	type: BaseType,
	component: OmniresComponent,
): void {
	BASE_REGISTRY.set(type, component);
}
//MO TODO add fallback
export function getBase(type: BaseType): OmniresComponent {
	return BASE_REGISTRY.get(type) ?? (() => 69);
}
