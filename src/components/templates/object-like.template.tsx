import { Component, createSignal, For, Show } from "solid-js";
import { css } from "solid-styled-components";

import { O } from "../common";

import { map } from "../../modules/mapper";
import { getPreview } from "../../utils/get-preview";

export const TObjectLike: Component<{
	entries: Iterable<[any, any]>;
	brackets: string;
	preview: number;
	themeColor: string;
	previewColor: string;
	isCollection?: boolean;
}> = (props) => {
	const entries = Array.from(props.entries);
	const length = entries.length;
	const empty = length === 0;

	const [isPreview, togglePreview] = createSignal(true);

	return (
		<O color={props.themeColor}>
			<Show when={!empty}>
				<span
					onclick={() => togglePreview((preview) => !preview)}
					class={css`
						user-select: none;
						-webkit-user-select: none;
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
			<Show when={props.isCollection}>{`(${length})`}</Show>
			{props.brackets[0]}
			<Show when={!empty && !isPreview()}>
				<br></br>
			</Show>
			<For each={entries.slice(0, props.preview)}>
				{([key, value], i) => (
					<span
						class={
							isPreview()
								? void 0
								: css`
										padding-left: 1em;
								  `
						}
					>
						<Show when={!(props.isCollection && isPreview())}>
							<O color={props.previewColor}>
								<Show
									when={!isPreview()}
									fallback={getPreview(key)}
								>
									{map(key)}
								</Show>
							</O>
							:
						</Show>
						<O
							color={props.previewColor}
							class={
								isPreview()
									? void 0
									: css`
											padding-left: 0.5em;
									  `
							}
						>
							<Show
								when={!isPreview()}
								fallback={getPreview(value)}
							>
								{map(value)}
							</Show>
						</O>
						<Show when={isPreview() && i() < length - 1}>, </Show>
						<Show when={!isPreview()}>
							<br></br>
						</Show>
					</span>
				)}
			</For>
			<Show when={length > props.preview}>"\u2026"</Show>
			{props.brackets[1]}
		</O>
	);
};
