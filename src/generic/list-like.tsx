import { createSignal, For, Show } from "solid-js";
import { elementify } from "../mapper/elementify";
import { stringify } from "../mapper/stringify";
import { Generic, OmniGeneric } from "../types/generic";
import { Oklch } from "../types/oklch";

export function listlike<T extends Generic>(
	trans: (value: T) => Iterable<[unknown, unknown]>,

	brace: string,
	arrow: string,
	keyed = false,

	color1: Oklch,
	color2: Oklch,
): OmniGeneric<T> {
	return (props) => {
		const list = Array.from(trans(props.children));

		const [view, setView] = createSignal(false);

		return (
			<div
				class="omnires"
				style={{ color: color1 }}
			>
				<div
					style={{ "cursor": "pointer", "user-select": "none" }}
					onclick={() => setView(!view())}
				>
					{"\u25b6"}
				</div>
				{`(${String(list.length)})`}

				{brace[0]}
				<Show when={view() && list.length !== 0}>
					<br></br>
				</Show>

				<For each={view() ? list : list.slice(0, 5)}>
					{([k, v], i) => {
						return (
							<span>
								<Show when={view() || keyed}>
									<div
										style={{
											"color": color2,
											"margin-left":
												view()
													? "1rem"
													: "0",
										}}
									>
										{view()
											? elementify(
													k,
												)
											: stringify(
													k,
												)}
									</div>
									<div
										style={{
											"margin-inline":
												view()
													? ".5rem"
													: "0",
										}}
									>
										{arrow}
									</div>
								</Show>

								<div style={{ color: color2 }}>
									{view()
										? elementify(v)
										: stringify(v)}
								</div>

								<Show
									when={
										i() !==
										list.length - 1
									}
								>
									{", "}
								</Show>
								<Show when={view()}>
									<br></br>
								</Show>
							</span>
						);
					}}
				</For>

				<Show when={!view() && list.length > 5}>{"\u2026"}</Show>
				{brace[1]}
			</div>
		);
	};
}
