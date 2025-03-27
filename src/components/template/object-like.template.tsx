import { Component, createSignal, For, Show } from "solid-js";
import { css } from "solid-styled-components";

import { O } from "../core";

import { map } from "../../modules/mapper";

export const TObjectLike: Component<{
	value: object;
	bracket: string;
	maxPreview: number;
	entries: (objectLike: object) => [any, any][];
	primaryColor: string;
	secondaryColor: string;
	hideKeys?: boolean;
}> = ({
	value,
	bracket,
	maxPreview,
	entries,
	primaryColor,
	secondaryColor,
	hideKeys,
}) => {
	const length = getLength(value);

	const [preview, setPreview] = createSignal(true);

	return (
		<O color={primaryColor}>
			{length === 0 ? (
				<></>
			) : (
				<div
					onclick={() => setPreview((preview) => !preview)}
					class={css`
						display: inline-block;
						user-select: none;
						transition: filter 0.2s ease-out;
						&:hover {
							filter: brightness(0.5);
						}
					`}
				>
					<O
						color={primaryColor}
						class={css`
							cursor: pointer;
							scale: 0.75;
						`}
					>
						{"\u25b6"}
					</O>
				</div>
			)}
			{bracket[0]}
			<Show when={length !== 0 && !preview()}>
				<br></br>
			</Show>
			<For each={entries(value).slice(0, maxPreview)}>
				{([key, value], i) => (
					<span
						class={
							preview()
								? void 0
								: css`
										padding-left: 1em;
								  `
						}
					>
						{hideKeys ? (
							<></>
						) : (
							<>
								<O color={secondaryColor}>{getPreview(key)}</O>:
							</>
						)}
						<O color={secondaryColor}>
							{preview() ? getPreview(value) : map(value)}
						</O>
						<Show when={i() !== length - 1}>,</Show>
						<Show when={!preview()}>
							<br></br>
						</Show>
					</span>
				)}
			</For>
			<>{length > maxPreview ? "\u2026" : ""}</>
			{bracket[1]}
		</O>
	);
};

function getLength(objectLike: object): number {
	if ("length" in objectLike) return objectLike.length as number;
	if ("size" in objectLike) return objectLike.size as number;
	return Object.keys(objectLike).length;
}

function getPreview(value: any): string {
	const type = typeof value;
	if (type === "function" || type === "object" || type === "symbol") {
		return `[${Object.getPrototypeOf(value).constructor.name}]`;
	}
	return `${value}`;
}
