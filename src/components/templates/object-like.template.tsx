import { Component, createSignal, For, Show } from "solid-js";
import { css } from "solid-styled-components";
import { map } from "../../modules/map";
import { preview } from "../../modules/preview";
import { O } from "../common";

export const ObjectLike: Component<{
	entries: Iterable<[unknown, unknown]>;
	preview: number;

	paren?: string;
	arrow?: string;
	pColor: string;
	sColor: string;

	list?: boolean;
}> = (props) => {
	const entries = Array.from(props.entries);
	const length = entries.length;
	const isEmpty = length === 0;

	const [isPreview, setPreview] = createSignal(true);

	return (
		<O color={props.pColor}>
			<Show when={!isEmpty}>
				<span
					onclick={() => setPreview((preview) => !preview)}
					class={css`
						-webkit-user-select: none;
						user-select: none;
						cursor: pointer;

						transition: filter 0.2s ease-out;
						&:hover {
							filter: brightness(0.5);
						}
					`}
				>
					{"\u25b6"}
				</span>
			</Show>

			{`(${length.toFixed()})`}

			{props.paren?.[0] ?? "{"}

			<Show when={!isPreview() && !isEmpty}>
				<br></br>
			</Show>

			<For each={isPreview() ? entries.slice(0, props.preview) : entries}>
				{(item, i) => (
					<Pair
						entry={item}
						arrow={props.arrow}
						isList={props.list}
						isLast={i() === length - 1}
						isPreview={isPreview()}
						sColor={props.sColor}
					></Pair>
				)}
			</For>

			<Show when={isPreview() && length > props.preview}>{"\u2026"}</Show>

			{props.paren?.[1] ?? "}"}
		</O>
	);
};

const Pair: Component<{
	entry: [unknown, unknown];

	arrow?: string;
	isList?: boolean;
	isLast: boolean;

	isPreview: boolean;
	sColor: string;
}> = (props) => {
	const [key, value] = props.entry;

	return (
		<span
			class={
				props.isPreview
					? undefined
					: css`
							padding-left: 1em;
						`
			}
		>
			<Show when={!props.isPreview || !props.isList}>
				<O color={props.sColor}>
					<Show
						when={props.isPreview}
						fallback={map(key)}
					>
						{preview(key)}
					</Show>
				</O>
				{props.arrow ?? ":"}
			</Show>

			<O
				color={props.sColor}
				class={
					props.isPreview
						? undefined
						: css`
								padding-left: 0.5em;
							`
				}
			>
				<Show
					when={props.isPreview}
					fallback={map(value)}
				>
					{preview(value)}
				</Show>
			</O>

			<Show when={props.isPreview && !props.isLast}>{", "}</Show>

			<Show when={!props.isPreview}>
				<br></br>
			</Show>
		</span>
	);
};
