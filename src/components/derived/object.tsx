import { createSignal, For, Show } from "solid-js";
import { css } from "solid-styled-components";

import { O, Ocomponent } from "../core";

import { map } from "../../modules/mapper";

const MAX_ABBREV_CNT = 4;

export const Oobject: Ocomponent<object> = ({ value }) => {
	const length = Object.keys(value).length;

	const [collapse, setCollapse] = createSignal(length > MAX_ABBREV_CNT);

	return (
		<O color="oklch(0.269 0 0)">
			<button
				onclick={() => setCollapse((collapse) => !collapse)}
				class={css`
					all: initial;
					transform: translateY(-0.18em);
				`}
			>
				<O
					color="oklch(0.872 0.01 258.338)"
					class={css`
						cursor: pointer;
						scale: 0.7;
						transition: color 0.2s ease-out;
						&:hover {
							color: oklch(0.707 0.022 261.325);
						}
					`}
				>
					{"\u25b6"}
				</O>
			</button>
			<Show when={collapse()}>
				{"{"}
				<For each={Object.entries(value).slice(0, MAX_ABBREV_CNT)}>
					{([key, value], index) => (
						<>
							<span>
								<O color="oklch(0.444 0.177 26.899)">{key}</O>:
								{typeof value === "object" ? "<Object>" : String(value)}
							</span>
							<Show when={index() !== length - 1}>,</Show>
						</>
					)}
				</For>
				<Show when={length > MAX_ABBREV_CNT}>...</Show>
				{"}"}
			</Show>
			<Show when={!collapse()}>
				{"{"}
				<Show when={length !== 0}>
					<br></br>
				</Show>
				<For each={Object.entries(value)}>
					{([key, value], index) => (
						<>
							<span
								class={css`
									padding-left: 1em;
								`}
							>
								<O color="oklch(0.444 0.177 26.899)">{key}</O>: {map(value)}
							</span>
							<Show when={index() !== length - 1}>,</Show>
							<br></br>
						</>
					)}
				</For>
				{"}"}
			</Show>
		</O>
	);
};
