import { Component, createSignal, For, Show } from "solid-js";
import { css } from "solid-styled-components";
import { map } from "../../modules/mapper";
import { getPreview } from "../../utils/get-preview";
import { O } from "../common";

export const ObjectLike: Component<{
	entries: Iterable<[unknown, unknown]>;
	preview: number;

	bracket: string;
	themeColor: string;
	previewColor: string;

	collection?: boolean;
}> = (props) => {
	const entries = Array.from(props.entries);
	const length = entries.length;
	const empty = length === 0;

	const [isPreview, setPreview] = createSignal(true);

	return (
		<O color={props.themeColor}>
			<Show when={!empty}>
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

			<Show when={props.collection}>{`(${length.toFixed()})`}</Show>

			{props.bracket[0]}

			<Show when={!isPreview() && !empty}>
				<br></br>
			</Show>

			<For each={isPreview() ? entries.slice(0, props.preview) : entries}>
				{([key, value], i) => (
					<span
						class={
							isPreview()
								? undefined
								: css`
										padding-left: 1em;
									`
						}
					>
						<Show when={!(isPreview() && props.collection)}>
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
									? undefined
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

						<Show when={isPreview() && i() < length - 1}>
							{", "}
						</Show>

						<Show when={!isPreview()}>
							<br></br>
						</Show>
					</span>
				)}
			</For>

			<Show when={isPreview() && length > props.preview}>{"\u2026"}</Show>

			{props.bracket[1]}
		</O>
	);
};
